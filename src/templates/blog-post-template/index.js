import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogPostMeta from '../../components/blog-meta-data'

import * as styles from './styles.module.scss'

const BlogPostTemplate = ({
	// this prop will be injected by the GraphQL query below.
	data: {
		markdownRemark: {
			html,
			timeToRead,
			frontmatter: { title, date, tags, image, imageAlt },
		},
	},
}) => (
	<Layout>
		<SEO title={title} keywords={['gatsby', 'application', 'react']} />
		<div className="section">
			<div className={styles.back}>
				<Link to="/blog">
					<i className="fas fa-chevron-left" />
					<span className={styles.afterIcon}>Blog</span>
				</Link>
			</div>
			<div className="columns">
				<div className={cx(styles.blogColumn, 'column is-four-fifths')}>
					<h1 className="title has-text-weight-light">{title}</h1>
					<BlogPostMeta date={date} timeToRead={timeToRead} tags={tags} />
					<GatsbyImage
						image={image.childImageSharp.gatsbyImageData}
						alt={imageAlt}
					/>
					{/* eslint-disable-next-line react/no-danger */}
					<div className="content" dangerouslySetInnerHTML={{ __html: html }} />
				</div>
				<div className="column">
					<div className={styles.spacer} />
					<div className="card">
						<div className="card-content">
							You can also find me on Twitter{' '}
							<a target="blank" href="https://twitter.com/zachrazar">
								<i className="fab fa-twitter" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

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
				image {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, width: 800)
					}
				}
				imageAlt
			}
		}
	}
`

export default BlogPostTemplate
