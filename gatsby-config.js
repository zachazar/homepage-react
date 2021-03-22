module.exports = {
	siteMetadata: {
		title: 'Zach Azar',
		description: 'Personal homepage',
		author: '@zachazar',
		siteUrl: 'https://www.zachazar.com/',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
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
		'gatsby-plugin-sitemap',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}
