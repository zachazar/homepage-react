// @flow

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ExperienceTree from '../components/experience-tree'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<ExperienceTree />
	</Layout>
)

export default IndexPage
