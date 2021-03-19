import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogPostPreview from '../../components/blog-post-preview'

const Blog = ({
	data: {
		allMarkdownRemark: { edges: posts },
	},
}) => (
	<Layout>
		<SEO title="About" keywords={['gatsby', 'application', 'react']} />
		<div className="blog-posts">
			{posts
				.filter((post) => post.node.frontmatter.title.length > 0)
				.map(({ node: post }) => (
					<BlogPostPreview post={post} />
				))}
		</div>
	</Layout>
)

Blog.propTypes = {
	data: PropTypes.objectOf({
		allMarkdownRemark: PropTypes.objectOf({
			edges: PropTypes.object,
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
					}
				}
			}
		}
	}
`
// image {
// 	childImageSharp {
// 		fluid(maxWidth: 800) {
// 			...GatsbyImageSharpFluid
// 		}
// 	}
// }
