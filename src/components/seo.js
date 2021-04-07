import * as React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import useSiteMetaData from '../hooks/use-site-meta-data'

/*
A lot of this referenced from:
- https://www.wesleylhandy.net/blog/seo-accessibility-first-gatsby.html
- https://blog.dustinschau.com/search-engine-optimization-with-gatsby
*/

const SEO = ({
	description,
	isBlogPost,
	lang,
	meta,
	keywords,
	title,
	imageMetaData,
}) => {
	const siteMetadata = useSiteMetaData()
	const metaDescription = description || siteMetadata.description
	const titleTag = `${title ? `${title} | ` : ''}${siteMetadata.title}`
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={titleTag}
			meta={[
				{
					name: 'description',
					content: metaDescription,
				},
				{
					property: 'og:title',
					content: titleTag,
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
					name: 'twitter:creator',
					content: siteMetadata.author,
				},
				{
					name: 'twitter:title',
					content: titleTag,
				},
				{
					name: 'twitter:description',
					content: metaDescription,
				},
			]
				.concat(
					imageMetaData
						? [
								{
									property: 'og:image',
									content: `${imageMetaData.path}`,
								},
								{ name: 'twitter:card', content: 'summary_large_image' },
								{
									property: 'og:image:alt',
									content: imageMetaData.imageAlt,
								},
								{
									property: 'og:image:width',
									content: imageMetaData.width,
								},
								{
									property: 'og:image:height',
									content: imageMetaData.height,
								},
								{
									property: 'twitter:image:alt',
									content: imageMetaData.imageAlt,
								},
						  ]
						: [
								{
									name: 'twitter:card',
									content: 'summary',
								},
						  ]
				)
				.concat(
					imageMetaData && imageMetaData.path.includes('https')
						? [
								{
									property: 'twitter:image:secure_url',
									content: imageMetaData.path,
								},
								{
									property: 'og:image:secure_url',
									content: imageMetaData.path,
								},
						  ]
						: []
				)
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
}

SEO.defaultProps = {
	description: '',
	lang: 'en',
	meta: [],
	isBlogPost: false,
	imageMetaData: null,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.string),
	keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	isBlogPost: PropTypes.bool,
	imageMetaData: PropTypes.shape({
		imageAlt: PropTypes.string,
		path: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
	}),
}
export default SEO
