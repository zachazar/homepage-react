// @flow

import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './styles.module.scss'

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<div className={styles.container}>
			<h1>Let's chat!</h1>
		</div>
	</Layout>
)

export default ContactPage
