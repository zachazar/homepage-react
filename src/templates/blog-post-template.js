import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({
	// this prop will be injected by the GraphQL query below.
	data: {
		markdownRemark: { frontmatter, html },
	},
}) => (
	<Layout>
		<SEO title="About" keywords={['gatsby', 'application', 'react']} />

		<div>
			<div>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	</Layout>
)

BlogPostTemplate.propTypes = {
	data: PropTypes.objectOf({
		markdownRemark: PropTypes.objectOf({
			frontmatter: PropTypes.objectOf({
				title: PropTypes.string,
				date: PropTypes.string,
			}),
			html: PropTypes.html,
		}),
	}).isRequired,
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`

export default BlogPostTemplate
