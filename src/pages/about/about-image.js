import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const AboutImage = () => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(
					relativePath: { eq: "ZachAzar_Professional2_600.jpg" }
				) {
					childImageSharp {
						fluid(maxWidth: 300) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
	/>
)
export default AboutImage
