import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogLayout from '../../components/blog-layout'
import BlogMetaData from '../../components/blog-meta-data'
import SubscriptionForm from '../../components/subscription-form'
import useSiteMetadata from '../../hooks/use-site-meta-data'

import * as styles from './styles.module.scss'

const BlogPostTemplate = ({
	// this prop will be injected by the GraphQL query below.
	data: {
		markdownRemark: {
			html,
			timeToRead,
			frontmatter: {
				title,
				date,
				tags,
				image,
				description,
				imageAlt,
				additionalKeywords,
				slug,
			},
		},
	},
}) => {
	const { siteUrl } = useSiteMetadata()
	const {
		width,
		height,
		images: {
			fallback: { src: publicURL },
		},
	} = image.childImageSharp.gatsbyImageData
	return (
		<Layout>
			<SEO
				isBlogPost
				title={title}
				description={description}
				imageAlt={imageAlt}
				imageMetaData={{
					imageAlt,
					width,
					height,
					path: `${siteUrl}${publicURL}`,
				}}
				keywords={[...tags, ...(additionalKeywords || []), 'blog', 'Zach Azar']}
			/>
			<BlogLayout hasBackButton>
				<div className={styles.titleContainer}>
					<h1 className="title has-text-weight-light">{title}</h1>
				</div>
				<div className={styles.metaContainer}>
					<BlogMetaData date={date} timeToRead={timeToRead} tags={tags} />
				</div>
				<div className={styles.imageContainer}>
					<GatsbyImage
						image={image.childImageSharp.gatsbyImageData}
						alt={imageAlt}
						placeholder="blurred"
					/>
				</div>
				<div
					className="content"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<div className="level">
					<div className={cx('level-item', styles.shareButtons)}>
						<a
							className="button"
							href={`https://twitter.com/intent/tweet?url=${siteUrl}${slug}&text=${encodeURI(
								title
							)}`}
							target="blank"
						>
							<i className="fab fa-twitter mr-1" alt="Twitter logo" /> Tweet
						</a>
						<a
							className="button"
							href={`https://www.facebook.com/sharer.php?u=${siteUrl}${slug}`}
							target="blank"
						>
							<i className="fab fa-facebook mr-1" alt="Facebook logo" /> Share
						</a>
					</div>
				</div>
				<div className="level">
					<p className={cx('level-item', styles.endDivider)}>. . .</p>
				</div>
				<div className={cx('columns', styles.footerSection)}>
					<div className="column is-7">
						<div className="card">
							<div className="card-content">
								<div className={cx('media', styles.media)}>
									<div className="media-left">
										<StaticImage
											src="../../images/favicon-circle-small.png"
											alt="Photo of Zach"
											className="image is-48x48"
											placeholder="blurred"
										/>
									</div>
									<div className="media-content">
										<p className="title has-text-weight-light is-4">
											Zach Azar
										</p>
										<p className="subtitle is-6">
											<a target="blank" href="https://twitter.com/zachrazar">
												@zachrazar
											</a>
										</p>
									</div>
								</div>
								<div className="content">
									<p>
										If you have a question or comment, I would love to hear from
										you!
									</p>
									<p>
										Reach out on{' '}
										<a target="blank" href="https://twitter.com/zachrazar">
											Twitter
										</a>{' '}
										or through my <Link to="/contact"> contact page</Link>.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="column is-1" />
					<div className="column ">
						<SubscriptionForm />
					</div>
				</div>
			</BlogLayout>
		</Layout>
	)
}

BlogPostTemplate.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
				date: PropTypes.string,
				tags: PropTypes.arrayOf(PropTypes.string),
				imageAlt: PropTypes.string,
				// eslint-disable-next-line react/forbid-prop-types
				image: PropTypes.object,
				additionalKeywords: PropTypes.arrayOf(PropTypes.string),
				slug: PropTypes.string,
				description: PropTypes.string,
			}),
			html: PropTypes.string,
			timeToRead: PropTypes.number,
		}),
	}).isRequired,
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			timeToRead
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				slug
				tags
				description
				additionalKeywords
				image {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, width: 1200)
					}
				}
				imageAlt
			}
		}
	}
`

export default BlogPostTemplate
