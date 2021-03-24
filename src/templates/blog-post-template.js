import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogLayout from '../components/blog-layout'
import BlogPostMeta from '../components/blog-meta-data'

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
		<BlogLayout hasBackButton>
			<h1 className="title has-text-weight-light">{title}</h1>
			<BlogPostMeta date={date} timeToRead={timeToRead} tags={tags} />
			<div className="has-text-centered">
				<GatsbyImage
					image={image.childImageSharp.gatsbyImageData}
					alt={imageAlt}
				/>
			</div>
			{/* eslint-disable-next-line react/no-danger */}
			<div className="content" dangerouslySetInnerHTML={{ __html: html }} />
		</BlogLayout>
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
