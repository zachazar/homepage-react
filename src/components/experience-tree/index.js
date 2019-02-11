// @flow
import React from 'react'
import styles from './styles.module.scss'
import ExperienceCard from './components/experience-card'
import type { ExperienceData } from './lib/types'

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
	},
	{
		_id: 2,
		title: 'B.S. in Computer Science',
		subtitle: 'Vanderbilt University (2007 - 2011) Nashville, TN',
		tertiaryTitle: 'GPA: 3.70',
		description:
			"Minors: Engineering Management, Mathematics\nHonors: Cum Laude, Honors in Computer Science, Dean's List",
	},
]

const ExperienceTree = () => {
	const experienceCards = education.map(experienceData => (
		<ExperienceCard key={experienceData._id} experienceData={experienceData} />
	))
	console.log(experienceCards)

	return (
		<div className={styles.container}>
			<div className={styles.panel} id="leftPanel">
				<h2>Education</h2>
				{experienceCards}
				<h2>Experience</h2>
				<h2>Projects</h2>
			</div>
			<div className={styles.panel} id="rightPanel" />
		</div>
	)
}

export default ExperienceTree
