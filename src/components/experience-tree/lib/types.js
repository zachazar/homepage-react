// @flow

export type ExperienceData = {|
	_id: number,
	title: string,
	subtitle: string,
	tertiaryTitle: string,
	descriptionTitle?: string,
	description: string,
	skills: { [skillName: string]: 'MAX' | 'HIGH' | 'MED' | 'Low' },
|}

export type useStateFn<T> = ((T => T) | T) => void
