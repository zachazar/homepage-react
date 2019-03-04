// @flow
import React from 'react'
import styles from './styles.module.scss'
import ExperienceCard from './components/experience-card'
import SkillTree from './components/skill-tree'
import { SizeMe } from 'react-sizeme'
import { education, workExperience, projects } from './lib/experience-data'

const ExperienceTree = () => {
	const [active, setActive] = React.useState(0)

	const experienceDataToCard = experienceData => (
		<ExperienceCard
			key={experienceData._id}
			isActive={experienceData._id === active}
			experienceData={experienceData}
			setActive={setActive}
		/>
	)
	const educationCards = education.map(experienceDataToCard)
	const workExperienceCards = workExperience.map(experienceDataToCard)
	const projectCards = projects.map(experienceDataToCard)
	return (
		<div className={styles.container}>
			<div className={styles.panel} id="leftPanel">
				<h2>Experience</h2>
				{workExperienceCards}
				<h2>Education</h2>
				{educationCards}
				<h2>Projects</h2>
				{projectCards}
			</div>
			<div className={styles.panel} id="rightPanel">
				<h2>Technologies and Languages</h2>
				<SizeMe>
					{({ size }) => (
						<SkillTree
							experiences={[...education, ...workExperience, ...projects]}
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