// @flow
import React from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'
import styles from './styles.module.scss'
import type { ExperienceData, useStateFn } from '../../lib/types'

const defaultStyle = {
	transition: 'opacity 100ms ease, display 500ms ease',
	opacity: 0,
	display: 'none',
}

const transitionStyles = {
	entering: { opacity: 0.4, display: 'inline-block' },
	entered: { opacity: 1, display: 'inline-block' },
	exiting: { opacity: 0.4, display: 'inline-block' },
}

type Props = {
	experienceData: ExperienceData,
	isActive: boolean,
	setActive: useStateFn<number>,
}

const ExperienceCard = ({ experienceData, isActive, setActive }: Props) => (
	<div
		className={cx(styles.container, {
			[styles.isActive]: isActive,
		})}
		onClick={() => (isActive ? setActive(0) : setActive(experienceData._id))}
	>
		<div className={styles.title}>
			<div className={styles.mainTitle}>{experienceData.title}</div>
			<div>
				{experienceData.tertiaryUrl ? (
					<a
						className={styles.tertiaryUrl}
						target="blank"
						href={experienceData.tertiaryUrl}
					>
						{experienceData.tertiaryTitle}
					</a>
				) : (
					experienceData.tertiaryTitle
				)}
			</div>
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
					<div className={styles.descriptionContainer}>
						{experienceData.descriptions.map(description => (
							<p key={description} className={styles.description}>
								{description}
							</p>
						))}
					</div>
				</div>
			)}
		</Transition>
	</div>
)

export default ExperienceCard
