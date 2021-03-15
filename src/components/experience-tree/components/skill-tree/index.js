import * as React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'
import PropTypes from 'prop-types'

import { ExperienceData } from '../../lib/types'

function convertSkillValueToNumber(skillValue) {
	switch (skillValue) {
		case 'LOW':
			return 0.2
		case 'MED':
			return 0.5
		case 'HIGH':
			return 0.8
		case 'MAX':
			return 1.0
		default:
			throw new Error('Unexpected skill value')
	}
}

class SkillTree extends React.Component {
	// id: string

	// svgStyles: {
	// 	fontSize: number,
	// 	margin: {
	// 		top: number,
	// 		bottom: number,
	// 		left: number,
	// 		right: number,
	// 	},
	// 	itemMargin: number,
	// 	rectFill: string,
	// }

	// d3container: any

	// // D3 node
	// d3skillGroup: any

	// // D3 node
	// skills: any

	// // D3 node
	// rectWidth: number

	// experiences: Array<ExperienceData>

	// skillList: Array<string>

	// experiencesById: { [number]: ExperienceData }

	// svgHeight: number

	constructor(props) {
		super(props)

		this.id = 'skilltree'
		this.svgStyles = {
			fontSize: 16,
			margin: {
				top: 10,
				bottom: 10,
				left: 2,
				right: 30,
			},
			itemMargin: 10,
			rectFill: '#1777bf',
		}
		const { experiences } = props
		this.experiencesById = R.indexBy(R.prop('_id'), experiences)

		// All possible skills
		this.skillList = R.reduce(
			(acc, experience) => R.union(acc, Object.keys(experience.skills)),
			[],
			experiences
		).sort()

		this.svgHeight =
			this.skillList.length *
				(this.svgStyles.fontSize + this.svgStyles.margin.bottom) +
			this.svgStyles.margin.top +
			this.svgStyles.margin.bottom
	}

	componentDidMount() {
		this.initializeSVG()
		this.resizeSVG()
		this.initializeData()
		this.draw()
	}

	componentDidUpdate() {
		this.resizeSVG()
		this.draw()
	}

	initializeSVG() {
		this.d3container = d3.select(`#${this.id}`).append('svg')

		this.d3skillGroup = this.d3container
			.append('g')
			.attr(
				'transform',
				`translate(${this.svgStyles.margin.left},${this.svgStyles.margin.top})`
			)
	}

	resizeSVG() {
		const { width } = this.props
		this.rectWidth =
			width - (this.svgStyles.margin.left + this.svgStyles.margin.right)
		this.d3container.attr('width', width).attr('height', this.svgHeight)
	}

	initializeData() {
		this.skills = this.d3skillGroup
			.selectAll('.skill__group')
			.data(this.skillList)
			.enter()
			.append('g')
			.attr('class', 'skill__group')
			.style('font-size', this.svgStyles.fontSize)
			.style('cursor', 'default')
			.attr(
				'transform',
				(d, i) =>
					`translate(0,${
						i * (this.svgStyles.fontSize + this.svgStyles.itemMargin)
					})`
			)

		// Create the rectangles
		this.skills
			.append('rect')
			.attr('class', 'skill__rect')
			.attr('x', 0)
			.attr('y', -this.svgStyles.fontSize / 2)
			.attr('width', 0)
			.attr('height', 20)
			.attr('rx', 10)
			.attr('ry', 10)
			.style('fill', this.svgStyles.rectFill)

		// Create the texts
		this.skills
			.append('text')
			.attr('class', 'skill__text')
			.attr('x', 0)
			.attr('y', 0)
			.attr('dx', '0.5em')
			.text((d) => d)
			.attr('text-anchor', 'start')
			.attr('dominant-baseline', 'mathematical')
	}

	draw() {
		const { active } = this.props
		// Sort the data based on the active key
		this.sortData()

		// Render the data in the correct places
		this.d3skillGroup
			.selectAll('.skill__group')
			.transition()
			.duration(1000)
			.attr(
				'transform',
				(d, i) =>
					`translate(0,${
						i * (this.svgStyles.fontSize + this.svgStyles.itemMargin)
					})`
			)

		// Adjust rectangle widths and opacities to skill's value
		this.d3skillGroup
			.selectAll('.skill__rect')
			.transition()
			.duration(1000)
			.attr('width', (d) => {
				if (active) {
					const value = this.experiencesById[active].skills[d]
						? convertSkillValueToNumber(this.experiencesById[active].skills[d])
						: 0
					return this.rectWidth * value
				}
				return 0
			})
			.attr('fill-opacity', (d) => {
				if (active) {
					const value = this.experiencesById[active].skills[d]
						? convertSkillValueToNumber(this.experiencesById[active].skills[d])
						: 0
					return value
				}
				return 100
			})

		// If the skill is active, make it white over the rectangle
		this.d3skillGroup
			.selectAll('.skill__text')
			.transition()
			.duration(1000)
			.style('fill', (d) => {
				if (active) {
					return this.experiencesById[active].skills[d] ? 'white' : 'black'
				}
				return 'black'
			})
	}

	sortData() {
		this.skills.sort((a, b) => {
			const { active } = this.props
			if (active) {
				// Active item has both skills
				if (
					this.experiencesById[active].skills[a] &&
					this.experiencesById[active].skills[b]
				) {
					// Sort on value, breaking tie alphabetically
					if (
						this.experiencesById[active].skills[a] ===
						this.experiencesById[active].skills[b]
					) {
						return a <= b ? -1 : 1
					}
					return (
						convertSkillValueToNumber(this.experiencesById[active].skills[b]) -
						convertSkillValueToNumber(this.experiencesById[active].skills[a])
					)
				}
				// Else, the active item is missing one or both of the skills. Return
				// the non-missing skill, or sort alphabetically if neither exists.
				if (this.experiencesById[active].skills[a]) {
					return -1
				}
				if (this.experiencesById[active].skills[b]) {
					return 1
				}
				return a <= b ? -1 : 1
			}
			return a <= b ? -1 : 1
		})
	}

	render() {
		return <div id={this.id} />
	}
}

SkillTree.propTypes = {
	active: PropTypes.number.isRequired,
	experiences: PropTypes.arrayOf(ExperienceData).isRequired,
	width: PropTypes.number.isRequired,
}

export default SkillTree
