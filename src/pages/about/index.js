// @flow
import React from 'react'
import cx from 'classnames'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import AboutImage from './about-image'
import styles from './styles.module.scss'
import b from '../../styles/bulma.module.scss'

const AboutPage = () => (
	<Layout>
		<SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

		<div className={styles.container}>
			<div className={styles.aboutItem}>
				<div className={styles.aboutImage}>
					<AboutImage />
				</div>
			</div>
			<div className={styles.aboutItem}>
				<div className={cx(b.title, b.hasTextWeightLight)}>Welcome!</div>
				<p>
					My name is Zach Azar and I&#39;m a Full Stack Software Engineer
					currently seeking employment in San Francisco, CA.
				</p>
				<p>
					Originally from Albuquerque, NM, I attended undergrad at Vanderbilt
					University in Nashville, TN. There I discovered Computer Science and
					never looked back. After receiving my degree, I worked for a short
					time in Nashville. I decided to move back to Albuquerque to spend time
					with family. After working in Albuquerque as a Software Engineer with
					New Signature, I decided to further my knowledge with a M.S. from the
					University of Denver.
				</p>
				<p>
					Upon defending my thesis, I was approached by a friend with a great
					startup idea. We founded a company and built a data visualization tool
					for the restaurant space. Though the startup was short lived, I
					learned a tremendous amount (including some new technologies like
					Node.js, AngularJS, and D3).
				</p>
				<p>
					In my free time, I enjoy hiking with my girlfriend, longboarding with
					my little wolf, playing soccer, and taking road trips.
				</p>
			</div>
		</div>
	</Layout>
)

export default AboutPage
