/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// meta
// styled
// images
// sourcefiles
// fonts

module.exports = {
	siteMetadata: {
		title: 'samle',
		description: 'This is sample Site',
		author: '@miesztex',
		siteUrl: 'https://gatsby-portfolio-first.netlify.app',
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Merriweather',
							variants: ['400', '700'],
						},
						{ family: 'Merriweather Sans' },
					],
				},
			},
		},
		// {
		// 	resolve: `gatsby-source-contentful`,
		// 	options: {
		// 		spaceId: `your_space_id`,
		// 		// Learn about environment variables: https://gatsby.dev/env-vars
		// 		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		// 		host: `preview.contentful.com`,
		// 	},
		// },
	],
};
