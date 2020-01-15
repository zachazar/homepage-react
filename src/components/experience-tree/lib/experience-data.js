// @flow
import type { ExperienceData } from './types'

export const education: Array<ExperienceData> = [
	{
		_id: 1,
		title: 'M.S. in Computer Science',
		subtitle: 'University of Denver (2013 - 2016)',
		tertiaryTitle: 'GPA: 3.97',
		descriptionTitle:
			'Thesis: PECCit - An Omniscient Debugger for Web Development',
		descriptions: [
			'PECCit is a multi-application software system which offers a tool for improved backend debugging. Built using PHP, C++, Linux, MySQL, JavaScript, jQuery, AJAX, a REST API, HTML, CSS, Bootstrap, etc.',
		],
		skills: {
			PHP: 'HIGH',
			MySQL: 'HIGH',
			'Advanced Data Structures and Algorithms': 'MAX',
		},
	},
	{
		_id: 2,
		title: 'B.S. in Computer Science',
		subtitle: 'Vanderbilt University (2007 - 2011)',
		tertiaryTitle: 'GPA: 3.70',
		descriptions: [
			'Minors: Engineering Management, Mathematics',
			"Honors: Cum Laude, Honors in Computer Science, Dean's List",
		],
		skills: {
			'Object Oriented Programming': 'MAX',
			Java: 'HIGH',
			'C++': 'HIGH',
		},
	},
]

export const workExperience: Array<ExperienceData> = [
	{
		_id: 3,
		title: 'Co-Founder and Lead Engineer',
		subtitle: 'Lever Insights, LLC',
		tertiaryTitle: 'Feb 2016 - July 2016',
		descriptions: [
			'- Designed a full-stack solution for a data visualization web application',
			'- Developed a Single-Page Application (SPA) prototype using Node.js, Express, AngularJS, D3, Bootstrap, Sass',
		],
		skills: {
			AngularJS: 'MAX',
			D3: 'HIGH',
			Bootstrap: 'MED',
		},
	},
]

export const projects: Array<ExperienceData> = [
	{
		_id: 7,
		title: 'Homepage - Revised',
		subtitle: 'React - version 2',
		tertiaryTitle: 'Project on GitHub',
		tertiaryUrl: 'https://github.com/zachazar/homepage-react',
		descriptions: [
			'I revised my website using React instead of Angular. Additionally, I used create-react-app, gatsby, and deployed with Netlify.',
		],
		skills: {
			React: 'MAX',
		},
	},
	{
		_id: 8,
		title: 'Homepage',
		subtitle: 'Angular - version 1',
		tertiaryTitle: 'Project on GitHub',
		tertiaryUrl: 'https://github.com/zachazar/homepage',
		descriptions: [
			'Built a personal homepage (this website) using Angular, D3, Bootstrap, PHP, Webpack, Sass',
		],
		skills: {
			AngularJS: 'MAX',
			Bootstrap: 'HIGH',
		},
	},
]
