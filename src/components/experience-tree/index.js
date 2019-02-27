// @flow
import React from 'react'
import styles from './styles.module.scss'
import ExperienceCard from './components/experience-card'
import SkillTree from './components/skill-tree'
import type { ExperienceData } from './lib/types'
import { SizeMe } from 'react-sizeme'

const education: Array<ExperienceData> = [
	{
		_id: 1,
		title: 'M.S. in Computer Science',
		subtitle: 'University of Denver (2013 - 2016) Denver, CO',
		tertiaryTitle: 'GPA: 3.97',
		descriptionTitle:
			'Thesis: PECCit - An Omniscient Debugger for Web Development',
		description:
			'PECCit is a multi-application software system which offers a tool for improved backend debugging. Built using PHP, C++, Linux, MySQL, JavaScript, jQuery, AJAX, a REST API, HTML, CSS, Bootstrap, etc.',
		skills: {
			PHP: 'HIGH',
			MySQL: 'HIGH',
			'Advanced Data Structures and Algorithms': 'MAX',
		},
	},
	{
		_id: 2,
		title: 'B.S. in Computer Science',
		subtitle: 'Vanderbilt University (2007 - 2011) Nashville, TN',
		tertiaryTitle: 'GPA: 3.70',
		description:
			"Minors: Engineering Management, Mathematics\nHonors: Cum Laude, Honors in Computer Science, Dean's List",
		skills: {
			'Object Oriented Programming': 'MAX',
			Java: 'HIGH',
			'C++': 'HIGH',
		},
	},
]

const ExperienceTree = () => {
	const [active, setActive] = React.useState(0)
	const experienceCards = education.map(experienceData => (
		<ExperienceCard
			key={experienceData._id}
			isActive={experienceData._id === active}
			experienceData={experienceData}
			setActive={setActive}
		/>
	))
	return (
		<div className={styles.container}>
			<div className={styles.panel} id="leftPanel">
				<h2>Education</h2>
				{experienceCards}
				<h2>Experience</h2>
				<h2>Projects</h2>
			</div>
			<div className={styles.panel} id="rightPanel">
				<h2>Technologies and Languages</h2>
				<SizeMe>
					{({ size }) => (
						<SkillTree
							experiences={education}
							active={active}
							width={size.width}
						/>
					)}
				</SizeMe>
			</div>
		</div>
	)
}

export default ExperienceTree
