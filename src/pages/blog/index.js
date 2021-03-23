import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogPostPreview from '../../components/blog-post-preview'
import * as styles from './styles.module.scss'

const Blog = ({
	data: {
		allMarkdownRemark: { edges: posts },
	},
}) => (
	<Layout>
		<SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
		<div className="section">
			<div className={styles.topSpacer} />
			<div className="columns">
				<div className="column is-four-fifths">
					{posts
						.filter((post) => post.node.frontmatter.title.length > 0)
						.map(({ node: post }) => (
							<div className={styles.post}>
								<BlogPostPreview post={post} key={post.id} />
							</div>
						))}
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
Blog.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.arrayOf(PropTypes.object),
		}),
	}).isRequired,
}

export default Blog

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					timeToRead
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
						tags
						image {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, width: 300)
							}
						}
						imageAlt
					}
				}
			}
		}
	}
`
