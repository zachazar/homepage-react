import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogLayout from '../../components/blog-layout'
import BlogPreviewList from '../../components/blog-preview-list'

const Blog = ({
	data: {
		allMarkdownRemark: { edges: posts },
	},
}) => (
	<Layout>
		<SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
		<BlogLayout showTwitterCard>
			<BlogPreviewList posts={posts} />
		</BlogLayout>
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
