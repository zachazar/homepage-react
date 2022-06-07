import * as React from 'react'
import { SizeMe } from 'react-sizeme'
import cx from 'classnames'

import ExperienceCard from './components/experience-card'
import SkillTree from './components/skill-tree'
import { education, workExperience, projects } from './lib/experience-data'
import * as styles from './styles.module.scss'

const ExperienceTree = () => {
	const [active, setActive] = React.useState(workExperience[0]._id)

	const experienceDataToCard = (experienceData) => (
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
		<div className={cx('columns', styles.container)}>
			<div
				className={cx('column', styles.panel, styles.leftPanel)}
				id="leftPanel"
				role="tree"
			>
				<a
					type="button"
					className={cx('button is-small is-rounded', styles.download)}
					href="/Zach Azar-Resume.pdf"
					target="blank"
				>
					<span>Download</span>{' '}
					<span className="icon is-small">
						<i className="fas fa-file-pdf" />
					</span>{' '}
				</a>
				<div className={cx('title', 'has-text-weight-light')}>Experience</div>
				{workExperienceCards}
				<div className={cx('title', 'has-text-weight-light')}>Education</div>
				{educationCards}
				<div className={cx('title', 'has-text-weight-light')}>Projects</div>
				{projectCards}
			</div>
			<div
				className={cx('column', styles.panel, styles.rightPanel)}
				id="rightPanel"
			>
				<div className={cx('title', 'has-text-weight-light')}>
					Technologies and Languages
				</div>
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
