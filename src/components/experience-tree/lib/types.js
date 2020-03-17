// @flow

export type ExperienceData = {|
	_id: number,
	title: string,
	subtitle: string,
	tertiaryTitle: string,
	tertiaryUrl?: string,
	descriptionTitle?: string,
	descriptions: Array<string>,
	skills: { [skillName: string]: 'MAX' | 'HIGH' | 'MED' | 'LOW' },
|}

export type useStateFn<T> = ((T => T) | T) => void
