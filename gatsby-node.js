const tagToSlug = (tag) => tag.replace(' ', '-')

async function createBlogPages({ createPage, graphql, reporter }) {
	const blogPostTemplate = require.resolve(`./src/templates/blog-post-template`)

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(
			`Error while running GraphQL query building blog pages.`
		)
		return
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug,
			},
		})
	})
}

async function createTagPages({ createPage, graphql, reporter }) {
	const tagPageTemplate = require.resolve(`./src/templates/tag-page-template`)

	const result = await graphql(`
		{
			allMarkdownRemark {
				group(field: frontmatter___tags) {
					tag: fieldValue
				}
			}
		}
	`)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(
			`Error while running GraphQL query building tag pages.`
		)
		return
	}

	const tags = result.data.allMarkdownRemark.group.map(({ tag }) => tag)

	tags.forEach((tag) => {
		createPage({
			path: `blog/tags/${tagToSlug(tag)}`,
			component: tagPageTemplate,
			context: {
				tag,
				allTags: [...tags],
			},
		})
	})
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	await createBlogPages({ createPage, graphql, reporter })
	await createTagPages({ createPage, graphql, reporter })
}
