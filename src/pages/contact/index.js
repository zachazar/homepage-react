// @flow

import React from 'react'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './styles.module.scss'

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
		<div className={styles.container}>
			<h1>Let's chat!</h1>
			<div className={styles.formContainer}>
				<form action="">
					<div className={styles.inputContainer}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Name" />
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor="emailAddress">Email address</label>
						<input type="email" id="emailAddress" placeholder="Email" />
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							id="message"
							placeholder="What should we talk about?"
						/>
					</div>
				</form>
			</div>
		</div>
	</Layout>
)

export default ContactPage
