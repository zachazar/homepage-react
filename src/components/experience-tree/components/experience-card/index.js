// @flow
import React from 'react'
import styles from './styles.module.scss'
import { Transition } from 'react-transition-group'
import type { ExperienceData, useStateFn } from '../../lib/types'

const defaultStyle = {
	transition: `opacity 100ms ease, display 500ms ease`,
	opacity: 0,
	display: 'none',
}

const transitionStyles = {
	entering: { opacity: 0.4, display: 'inline-block' },
	entered: { opacity: 1, display: 'inline-block' },
	exiting: { opacity: 0.4, display: 'inline-block' },
}

const ExperienceCard = ({ experienceData, isActive, setActive }: Props) => (
	<div
		className={styles.container}
		onClick={() => (isActive ? setActive(0) : setActive(experienceData._id))}
	>
		<div className={styles.title}>
			<div className={styles.mainTitle}>{experienceData.title}</div>
			<div className={styles.tertiaryTitle}>{experienceData.tertiaryTitle}</div>
		</div>
		<div>{experienceData.subtitle}</div>
		<Transition in={isActive} timeout={100}>
			{state => (
				<div
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					{experienceData.descriptionTitle && (
						<div className={styles.desctiptionTitle}>
							{experienceData.descriptionTitle}
						</div>
					)}
					<div className={styles.description}>{experienceData.description}</div>
				</div>
			)}
		</Transition>
	</div>
)

type Props = {
	experienceData: ExperienceData,
	isActive: boolean,
	setActive: useStateFn<number>,
}

export default ExperienceCard
