import * as React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExperienceTree from '../../components/experience-tree'

const ResumePage = () => (
	<Layout>
		<SEO
			title="Resume"
			keywords={['zach azar', 'resume', 'blog', 'gatsby', 'react']}
		/>
		<ExperienceTree />
	</Layout>
)

export default ResumePage
