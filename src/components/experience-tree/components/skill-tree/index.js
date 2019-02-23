// @flow
import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'
import type { ExperienceData } from '../../lib/types'

type Props = {
	active?: number,
	experiences: Array<ExperienceData>,
}

function convertSkillValueToNumber(skillValue) {
	switch (skillValue) {
		case 'LOW':
			return 2
		case 'MED':
			return 5
		case 'HIGH':
			return 8
		case 'MAX':
			return 10
		default:
			throw new Error('Unexpected skill value')
	}
}

export default class SkillTree extends React.Component<Props> {
	id: string
	svgStyles: {
		fontSize: number,
		margin: {
			top: number,
			bottom: number,
			left: number,
			right: number,
		},
		itemMargin: number,
		rectFill: string,
	}
	d3container: any // D3 node
	d3skillGroup: any // D3 node
	skills: any // D3 node
	width: number
	experiences: Array<ExperienceData>
	skillList: Array<string>
	experiencesById: { [number]: ExperienceData }

	constructor(props: Props) {
		super(props)
		this.width = 500 // TODO change this to a prop

		this.id = 'skilltree'
		this.svgStyles = {
			fontSize: 16,
			margin: {
				top: 10,
				bottom: 10,
				left: 10,
				right: 30,
			},
			itemMargin: 10,
			rectFill: '#1777bf',
		}

		this.experiencesById = R.indexBy(R.prop('_id'), this.props.experiences)

		// All possible skills
		this.skillList = R.reduce(
			(acc, experience) => R.union(acc, Object.keys(experience.skills)),
			[],
			this.props.experiences
		).sort()
	}

	initializeSVG() {
		this.d3container = d3
			.select(`#${this.id}`)
			.append('svg')
			.attr('width', 500)
			.attr('height', 500)
			.style('margin-left', 100)

		this.d3skillGroup = this.d3container
			.append('g')
			.attr(
				'transform',
				`translate(${this.svgStyles.margin.left},${this.svgStyles.margin.top})`
			)
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
			.attr('transform', (d, i) => {
				return `translate(0,${i *
					(this.svgStyles.fontSize + this.svgStyles.itemMargin)})`
			})

		//Create the rectangles
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

		//Create the texts
		this.skills
			.append('text')
			.attr('class', 'skill__text')
			.attr('x', 0)
			.attr('y', 0)
			.attr('dx', '0.5em')
			.text(d => {
				return d
			})
			.attr('text-anchor', 'start')
			.attr('dominant-baseline', 'mathematical')
	}

	draw() {
		//Sort the data based on the active key
		this.sortData()

		//Render the data in the correct places
		this.d3skillGroup
			.selectAll('.skill__group')
			.transition()
			.duration(1000)
			.attr('transform', (d, i) => {
				return `translate(0,${i *
					(this.svgStyles.fontSize + this.svgStyles.itemMargin)})`
			})

		//Adjust rectangle widths and opacities to skill's value
		this.d3skillGroup
			.selectAll('.skill__rect')
			.transition()
			.duration(1000)
			.attr('width', d => {
				if (this.props.active) {
					let value = this.experiencesById[this.props.active].skills[d]
						? convertSkillValueToNumber(
								this.experiencesById[this.props.active].skills[d]
						  )
						: 0
					return (this.width * value) / 10
				} else {
					return 0
				}
			})
			.attr('fill-opacity', d => {
				if (this.props.active) {
					let value = this.experiencesById[this.props.active].skills[d]
						? convertSkillValueToNumber(
								this.experiencesById[this.props.active].skills[d]
						  )
						: 0
					return value / 10
				} else {
					return 100
				}
			})

		//If the skill is active, make it white over the rectangle
		this.d3skillGroup
			.selectAll('.skill__text')
			.transition()
			.duration(1000)
			.style('fill', d => {
				if (this.props.active) {
					return this.experiencesById[this.props.active].skills[d]
						? 'white'
						: 'black'
				} else {
					return 'black'
				}
			})
	}

	sortData() {
		this.skills.sort((a, b) => {
			const active = this.props.active
			if (!!active) {
				//Active item has both skills
				if (
					this.experiencesById[active].skills[a] &&
					this.experiencesById[active].skills[b]
				) {
					//Sort on value, breaking tie alphabetically
					return this.experiencesById[active].skills[a] ===
						this.experiencesById[active].skills[b]
						? a <= b
							? -1
							: 1
						: convertSkillValueToNumber(
								this.experiencesById[active].skills[b]
						  ) -
								convertSkillValueToNumber(
									this.experiencesById[active].skills[a]
								)
				}
				//The active item is missing one or both of the skills.
				else {
					//Return the non-missing skill, or sort alphabetically if neither exists
					return this.experiencesById[active].skills[a]
						? -1
						: this.experiencesById[active].skills[b]
						? 1
						: a <= b
						? -1
						: 1
				}
			} else {
				return a <= b ? -1 : 1
			}
		})
	}

	componentDidMount() {
		this.initializeSVG()
		this.initializeData()
		this.draw()
	}

	componentDidUpdate() {
		this.draw()
	}

	render() {
		return <div id={this.id} />
	}
}
