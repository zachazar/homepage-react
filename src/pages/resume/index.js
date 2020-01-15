// @flow

import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExperienceTree from '../../components/experience-tree'

const ResumePage = () => (
	<Layout>
		<SEO title="Resume" keywords={[`gatsby`, `application`, `react`]} />
		<ExperienceTree />
	</Layout>
)

export default ResumePage
