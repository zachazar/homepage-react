import * as React from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { ExperienceData } from '../../lib/types'
import * as styles from './styles.module.scss'

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

const ExperienceCard = ({ experienceData, isActive, setActive }) => (
	<div
		className={cx(styles.container, {
			[styles.isActive]: isActive,
		})}
		onClick={() => (isActive ? setActive(0) : setActive(experienceData._id))}
		onKeyPress={() => (isActive ? setActive(0) : setActive(experienceData._id))}
		role="treeitem"
		tabIndex="0"
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
			{(state) => (
				<div
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					{experienceData.descriptionTitle && (
						<div>{experienceData.descriptionTitle}</div>
					)}
					<div className={styles.descriptionContainer}>
						{experienceData.descriptions.map((description) => (
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

ExperienceCard.propTypes = {
	experienceData: PropTypes.exact(ExperienceData).isRequired,
	isActive: PropTypes.bool.isRequired,
	setActive: PropTypes.func.isRequired,
}

export default ExperienceCard
