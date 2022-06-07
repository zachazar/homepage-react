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
							My name is Zach Azar (he/him) and this is my homepage. I&apos;m a
							software engineer and technology entrepreneur living in
							Albuquerque, NM. I&apos;m currently taking a sabbatical and
							exploring my hometown after being on the west coast for the past 6
							years.
						</p>
						<p>
							I&apos;ve been developing software for 10+ years and have earned
							my Bachelor&apos;s and Master&apos;s degrees in Computer Science.
							In 2016, I was a technical co-founder (it didn&apos;t blast off,
							unfortunately) but then I joined
							<a target="blank" href="https://www.buildingconnected.com/">
								{' '}
								BuildingConnected{' '}
							</a>{' '}
							and was able to experience real startup growth in San Francisco
							🚀. Starting as a full-stack engineer when the business had 30
							employees, I ramped up to lead a team of engineers and then became
							an Engineering Manager helping to train other managers. Meanwhile,
							I was overseeing engineering for our subcontractor product (
							<a
								href="https://www.buildingconnected.com/bid-board/"
								target="blank"
							>
								Bid Board
							</a>{' '}
							) and working closely with Product and Design leads.
						</p>
						<p>
							It&apos;s been a whirlwind! After we were acquired by{' '}
							<a href="https://www.autodesk.com/" target="blank">
								Autodesk
							</a>{' '}
							in 2019 with 230 employees, I decided to return to the technical
							track and worked remotely out of Seattle in various technical
							roles including as a Platform Team lead and a consultant (similar
							to a Software Architect) for teams looking to scale their web
							applications. Check out my <Link to="/resume">résumé page</Link>{' '}
							to see all of the skills that I&apos;ve picked up along the way.
						</p>
						<p>
							In my free time, I enjoy biking around the city and taking day
							trips with my wife and{' '}
							<Link to="/blog/new-blog-setting-the-mood">dog 🐶</Link>. Feel
							free to <Link to="/contact">reach out</Link> if I can help you
							with anything!
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
					<Link
						className={cx('column is-full-mobile is-2-desktop', styles.dots)}
						to="/blog"
						title="See more posts"
					/>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage
