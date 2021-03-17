import * as React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

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
					<div className="blog-post-preview" key={post.id}>
						<h1>
							<Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
						</h1>
						<h2>{post.frontmatter.date}</h2>
						<p>{post.excerpt}</p>
					</div>
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
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
					}
				}
			}
		}
	}
`
