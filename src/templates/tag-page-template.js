import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogLayout from '../components/blog-layout'
import BlogPreviewList from '../components/blog-preview-list'

const Tags = ({
	pageContext: { tag, allTags },
	data: {
		allMarkdownRemark: { edges: posts },
	},
}) => (
	<Layout>
		<SEO
			title={`${tag} posts`}
			keywords={[tag, 'zach azar', 'blog', 'gatsby', 'react']}
		/>
		<BlogLayout hasBackButton tags={allTags} activeTag={tag} showSideInfo>
			<BlogPreviewList posts={posts} />
		</BlogLayout>
	</Layout>
)

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
		allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.arrayOf(PropTypes.object).isRequired,
		}),
	}).isRequired,
}
export default Tags

export const pageQuery = graphql`
	query ($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						primaryTitle
						subtitle
						date(formatString: "MMMM DD, YYYY")
						slug
						tags
						description
						image {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, width: 600)
							}
						}
						imageAlt
					}
				}
			}
		}
	}
`
