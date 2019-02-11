// @flow
import React from 'react'
import styles from './styles.module.scss'
import type { ExperienceData } from '../../lib/types'

const ExperienceCard = ({ experienceData }: Props) => (
	<div className={styles.container}>
		<div className={styles.title}>
			<div className={styles.mainTitle}>{experienceData.title}</div>
			<div className={styles.tertiaryTitle}>{experienceData.tertiaryTitle}</div>
		</div>
		<div className={styles.desctiptionTitle}>
			{experienceData.descriptionTitle}
		</div>
		<div className={styles.description}>{experienceData.description}</div>
	</div>
)

type Props = {
	experienceData: ExperienceData,
}

export default ExperienceCard
