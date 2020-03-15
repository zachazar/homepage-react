// @flow
import type { ExperienceData } from './types'

export const education: Array<ExperienceData> = [
	{
		_id: 10,
		title: 'M.S. in Computer Science',
		subtitle: 'University of Denver (2013 - 2016)',
		tertiaryTitle: 'GPA: 3.97',
		descriptionTitle:
			'Thesis: "PECCit - An Omniscient Debugger for Web Development"',
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
		_id: 9,
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
		_id: 8,
		title: 'Co-Founder and Lead Engineer',
		subtitle: 'Lever Insights, LLC - Seattle',
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
	{
		_id: 7,
		title: 'Graduate Teaching Assistant',
		subtitle: 'Department of Computer Science - University of Denver',
		tertiaryTitle: 'Sep 2013 - Sep 2015',
		descriptions: [
			'- Worked one-on-one with CS students while assisting professors with grading and teaching',
			'- Classes: Web Programming, Parallel and Distributed Programming, Programming Languages, AI, etc.',
		],
		skills: {
			'Object-Oriented Design': 'MAX',
			'Parallel and Distributed Computing': 'HIGH',
			'iOS with Objective-C': 'MED',
			'Artificial Intelligence': 'MED',
			'Tutoring and Mentoring': 'HIGH',
		},
	},
	{
		_id: 6,
		title: 'Software Engineer',
		subtitle: 'New Signature - Albuquerque, NM',
		tertiaryTitle: 'Nov 2012 - June 2013',
		descriptions: [
			'- Executed on full-stack tasks such as backend server admin/security, site migrations/deployments, and testing and framework updates (PHP, Drupal, WordPress, LAMP)',
			'- Independently designed/implemented software for handling internal client tickets and emails (C#)',
		],
		skills: {
			'C#': 'MAX',
			Drupal: 'HIGH',
			Wordpress: 'HIGH',
			'LAMP Stack': 'MED',
		},
	},
	{
		_id: 5,
		title: 'Technology Specialist',
		subtitle: 'OVATION, Inc - Nashville, TN',
		tertiaryTitle: 'Jan 2012 - May 2012',
		descriptions: [
			'- Managed infrastructure, data streaming, and software for large conferences',
			'- Independently designed/implemented two software packages (C#) aimed to reduce wait times for presenters',
		],
		skills: {
			'C#': 'MAX',
			MySQL: 'HIGH',
			UNIX: 'MED',
		},
	},
	{
		_id: 4,
		title: 'Undergraduate Research Assistant',
		subtitle: 'Institute for Software Integrated Systems - Nashville, TN',
		tertiaryTitle: 'May 2010 - Aug 2010',
		descriptions: [
			'- Prototyped a data-streaming solution for ingesting large amounts of real-time traffic data',
		],
		skills: {
			'Parallel and Distributed Computing': 'HIGH',
		},
	},
	{
		_id: 3,
		title: 'Summer Intern',
		subtitle: 'Visible Light Solar Technologies - Albuquerque,NM',
		tertiaryTitle: 'May 2009 - August 2009',
		descriptions: [
			'- Designed software for intelligent lighting profiles on embedded systems powered by solar panels',
			'- Built solar panels using a laser cutter and soldering iron',
		],
		skills: {
			'C/C++': 'HIGH',
		},
	},
]

export const projects: Array<ExperienceData> = [
	{
		_id: 2,
		title: 'Homepage - Revised',
		subtitle: 'React - version 2',
		tertiaryTitle: 'Project on GitHub',
		tertiaryUrl: 'https://github.com/zachazar/homepage-react',
		descriptions: [
			'I revised my website using React instead of Angular. Additionally, I used create-react-app, D3, flow, Bulma, gatsby, and deployed with Netlify.',
		],
		skills: {
			React: 'MAX',
		},
	},
	{
		_id: 1,
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
