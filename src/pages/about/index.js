import * as React from 'react'
import cx from 'classnames'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import useSiteMetadata from '../../hooks/use-site-meta-data'
import * as styles from './styles.module.scss'
import BlogPostPreviewSmall from '../../components/blog-post-preview-small'

const homePageImageQuery = graphql`
	query HomePageImageQuery {
		allFile(filter: { name: { eq: "zach-at-arches" } }) {
			edges {
				node {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED)
					}
					publicURL
				}
			}
		}
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 3
		) {
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
						image {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, height: 400, width: 400)
							}
						}
						imageAlt
						description
					}
				}
			}
		}
	}
`

const AboutPage = () => {
	const { siteUrl } = useSiteMetadata()
	const {
		allFile: {
			edges: [
				{
					node: {
						publicURL,
						childImageSharp: {
							gatsbyImageData: { width, height },
						},
					},
				},
			],
		},
		allMarkdownRemark: { edges: posts },
	} = useStaticQuery(homePageImageQuery)
	return (
		<Layout>
			<SEO
				title="About"
				keywords={['zach azar', 'blog', 'gatsby', 'react']}
				imageMetaData={{
					width,
					height,
					imageAlt: 'Photo of Zach Azar at Arches National park in Moab, Utah',
					path: `${siteUrl}${publicURL}`,
				}}
			/>
			<div className={styles.container}>
				<div className={cx('columns', styles.items)}>
					<div className={cx('column', styles.aboutItem)}>
						<div className={styles.aboutImage}>
							<StaticImage
								src="../../images/zach-at-arches.jpg"
								alt="Zach at Arches National park in Moab, Utah"
								layout="fullWidth"
								placeholder="blurred"
							/>
						</div>
					</div>
					<div className={cx('column', styles.aboutItem)}>
						<div className="title has-text-weight-light">Welcome!</div>
						<p>
							My name is Zach Azar and I&apos;m a Software Engineer living in
							Seattle, WA. Originally from Albuquerque, NM, I discovered
							Computer Science while attending Vanderbilt University in
							Nashville, TN and I&apos;ve never looked back.
						</p>
						<p>
							After graduating from Vandy, I worked in industry for a few years,
							then returned to academia to work as a Teaching Assistant and earn
							my M.S. from the University of Denver.
						</p>
						<p>
							Once I completed my master&apos;s degree, I was a technical
							co-founder briefly (it didn&apos;t blast off unfortunately) but
							then I joined
							<a target="blank" href="https://www.buildingconnected.com/">
								{' '}
								BuildingConnected{' '}
							</a>
							and was fortunate enough to experience real startup growth in SF
							🚀. Starting as a full-stack engineer, I ramped up to lead a team
							of engineers, and then became an Engineering Manager helping to
							train other managers. Meanwhile, I was overseeing engineering for
							our subcontractor product (
							<a
								href="https://www.buildingconnected.com/bid-board/"
								target="blank"
							>
								Bid Board
							</a>
							).
						</p>
						<p>
							It&apos;s been a whirlwind. After we got acquired by Autodesk, I
							decided to return to the technical track and now I work fully
							remotely out of Seattle. Check out{' '}
							<Link to="/resume">the Résumé page</Link> to see all of the skills
							I&apos;ve picked up along the way.
						</p>
						<p>
							In my free time, my favorite weekend activity is to road trip
							around Washington with my wife and{' '}
							<Link to="/blog/new-blog-setting-the-mood">dog 🐶</Link>. I prefer
							he/him pronouns.
						</p>
					</div>
				</div>
				<div className="title has-text-weight-light">Recent posts:</div>
				<div className={cx('columns is-desktop', styles.recentPosts)}>
					{posts.map(({ node: post }) => (
						<div key={post.id} className="column">
							<BlogPostPreviewSmall post={post} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage
