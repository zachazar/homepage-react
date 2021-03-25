import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
				siteUrl
			}
		}
	}
`

const SEO = ({
	description,
	isBlogPost,
	lang,
	meta,
	keywords,
	title,
	metaImage,
}) => (
	<StaticQuery
		query={detailsQuery}
		render={(data) => {
			const metaDescription = description || data.site.siteMetadata.description

			return (
				<Helmet
					htmlAttributes={{
						lang,
					}}
					title={title}
					titleTemplate={`%s | ${data.site.siteMetadata.title}`}
					meta={[
						{
							name: 'description',
							content: metaDescription,
						},
						{
							property: 'og:title',
							content: title,
						},
						{
							property: 'og:description',
							content: metaDescription,
						},
						{
							property: 'og:type',
							content: isBlogPost ? 'article' : 'website',
						},
						{
							name: 'twitter:card',
							content: 'summary',
						},
						{
							name: 'twitter:creator',
							content: data.site.siteMetadata.author,
						},
						{
							name: 'twitter:title',
							content: title,
						},
						{
							name: 'twitter:description',
							content: metaDescription,
						},
					]
						// .concat(
						// 	metaImage
						// 		? [
						// 				{ property: 'og:image', content: `${siteUrl}` },
						// 				{ property: 'og:image:width', content: metaImage.width },
						// 				{ property: 'og:image:height', content: metaImage.height },
						// 				{ name: 'twitter:card', content: 'summary_large_image' },
						// 				{
						// 					property: 'og:image:alt',
						// 					content: imageAlt,
						// 				},
						// 				{
						// 					property: 'twitter:image:alt',
						// 					content: imageAlt,
						// 				},
						// 		  ]
						// 		: []
						// )
						.concat(
							keywords.length > 0
								? {
										name: 'keywords',
										content: keywords.join(', '),
								  }
								: []
						)
						.concat(meta)}
				/>
			)
		}}
	/>
)

SEO.defaultProps = {
	description: '',
	lang: 'en',
	meta: [],
	isBlogPost: false,
	metaImage: null,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.string),
	keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	isBlogPost: PropTypes.bool,
	metaImage: PropTypes.shape({
		imageAlt: PropTypes.string,
		path: PropTypes.string,
	}),
}
export default SEO
