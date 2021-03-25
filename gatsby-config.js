module.exports = {
	siteMetadata: {
		title: 'Zach Azar',
		description:
			"Zach Azar's personal homepage blogging about tech, software engineering, engineering management, and entrepreneurship",
		author: '@zachrazar',
		siteUrl: 'https://www.zachazar.com/',
		social: {
			twitter: 'https://twitter.com/zachrazar',
		},
		socialLinks: {
			twitter: 'https://twitter.com/zachrazar',
			linkedin: 'https://www.linkedin.com/in/zach-azar',
			github: 'https://github.com/zachazar/',
		},
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
					{ resolve: 'gatsby-remark-prismjs' },
				],
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-81758415-2',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`,
			},
		},

		'gatsby-plugin-image',

		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/favicon-circle.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/tags/*`],
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				// graphQL query to get siteMetadata
				query: `{
					site {
						siteMetadata {
							title
							description
							siteUrl
							siteUrl: siteUrl,
							author
						}
					}
				}`,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							const {
								siteMetadata: { siteUrl, author },
							} = site
							return allMarkdownRemark.edges.map((edge) => {
								const {
									node: {
										frontmatter: { title, date, slug },
										excerpt,
										html,
									},
								} = edge
								return {
									...edge.node.frontmatter,
									language: `en-us`,
									title,
									author,
									date,
									description: excerpt,
									url: siteUrl + slug,
									guid: siteUrl + slug,
									custom_elements: [{ 'content:encoded': html }],
								}
							})
						},
						// query to get blog post data
						query: ` {
							allMarkdownRemark(
								sort: { order: DESC, fields: [frontmatter___date] },
							){
								edges {
									node {
										excerpt
										html
										frontmatter {
											slug
											date
											title
										}
									}
								}
							}
						}`,
						output: '/rss.xml',
						title: `Zach Azar | RSS Feed`,
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}
