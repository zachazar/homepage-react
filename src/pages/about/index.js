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
		<SEO title="About" keywords={['gatsby', 'application', 'react']} />

		<div className={styles.container}>
			<div className={cx(b.columns, styles.items)}>
				<div className={cx(b.column, styles.aboutItem)}>
					<div className={styles.aboutImage}>
						<AboutImage />
					</div>
				</div>
				<div className={cx(b.column, styles.aboutItem)}>
					<div className={cx(b.title, b.hasTextWeightLight)}>Welcome!</div>
					<p>
						My name is Zach Azar and I&apos;m a Software Engineer living in
						Seattle, WA. Originally from Albuquerque, NM, I discovered Computer
						Science while attending Vanderbilt University in Nashville, TN and
						I&apos;ve never looked back.
					</p>
					<p>
						After graduating, I worked in industry for a few years, then
						returned to academia to work as a Teaching Assistant and earn my
						M.S. from the University of Denver.
					</p>
					<p>
						After graduating, I was a technical cofounder briefly (it
						didn&apos;t blast off unfortunately) but then I joined
						<a href="https://www.buildingconnected.com/"> BuildingConnected </a>
						and was fortunate enough to experience real startup growth in SF 🚀.
						Starting as a full stack engineer, I ramped up to lead a team of
						engineers, and then became an Engineering Manager helping to train
						other managers and oversee engineering of our subcontractor product.
					</p>
					<p>
						It&apos;s been a whirlwind. After we got acquired by Autodesk, I
						decided to return to the technical track and now I work fully
						remotely out of Seattle for our Backend Platform team.
					</p>
					<p>
						In my free time, my favorite weekend activity is to road trip around
						Washington with my wife and dog.
					</p>
				</div>
			</div>
		</div>
	</Layout>
)

export default AboutPage
