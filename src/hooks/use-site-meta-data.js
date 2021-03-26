import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SiteMetaData {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						social {
							twitter
						}
						socialLinks {
							twitter
							linkedin
							github
						}
					}
				}
			}
		`
	)
	return site.siteMetadata
}

export default useSiteMetadata
