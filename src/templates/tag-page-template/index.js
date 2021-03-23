import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

const Tags = ({
	pageContext: { tag },
	data: {
		allMarkdownRemark: { edges, totalCount },
	},
}) => {
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`
	return (
		<div>
			<h1>{tagHeader}</h1>
			<ul>
				{edges.map(({ node: { id, frontmatter: { slug, title } } }) => (
					<li key={id}>
						<Link to={slug}>{title}</Link>
					</li>
				))}
			</ul>
			{/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
			<Link to="/tags">All tags</Link>
		</div>
	)
}
// Tags.propTypes = {
// 	pageContext: PropTypes.shape({
// 		tag: PropTypes.string.isRequired,
// 	}),
// 	data: PropTypes.shape({
// 		allMarkdownRemark: PropTypes.shape({
// 			totalCount: PropTypes.number.isRequired,
// 			edges: PropTypes.arrayOf(
// 				PropTypes.shape({
// 					node: PropTypes.shape({
// 						frontmatter: PropTypes.shape({
// 							title: PropTypes.string.isRequired,
// 						}),
// 						fields: PropTypes.shape({
// 							slug: PropTypes.string.isRequired,
// 						}),
// 					}),
// 				}).isRequired
// 			),
// 		}),
// 	}),
// }
export default Tags

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
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
