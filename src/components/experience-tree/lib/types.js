import PropTypes from 'prop-types'

export const ExperienceData = {
	_id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	tertiaryTitle: PropTypes.string.isRequired,
	tertiaryUrl: PropTypes.string,
	descriptionTitle: PropTypes.string,
	descriptions: PropTypes.arrayOf(PropTypes.string),
	skills: PropTypes.oneOf(['MAX', 'HIGH', 'MED', 'LOW']),
}

export default ExperienceData
