import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BlogLayout from '../../components/blog-layout'
import BlogPreviewList from '../../components/blog-preview-list'
import useSiteMetadata from '../../hooks/use-site-meta-data'

const blogPageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
						tags
						image {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, width: 600)
							}
						}
						imageAlt
						description
					}
				}
			}
		}
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
	}
`

const Blog = () => {
	const { siteUrl } = useSiteMetadata()
	const {
		allMarkdownRemark: { edges: posts },
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
	} = useStaticQuery(blogPageQuery)
	return (
		<Layout>
			<SEO
				title="Blog"
				keywords={['zach azar', 'blog', 'gatsby', 'react']}
				imageMetaData={{
					width,
					height,
					imageAlt: 'Photo of Zach Azar at Arches National park in Moab, Utah',
					path: `${siteUrl}${publicURL}`,
				}}
			/>
			<BlogLayout showSideInfo>
				<BlogPreviewList posts={posts} />
			</BlogLayout>
		</Layout>
	)
}

export default Blog
