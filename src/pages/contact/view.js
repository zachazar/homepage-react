// @flow

import React from 'react'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './styles.module.scss'
import b from '../../styles/bulma.module.scss'

const ContactPage = ({ onSubmit }: { onSubmit: Function }) => (
	<Layout>
		<SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
		<div className={styles.container}>
			<h1 className={cx(b.title, b.hasTextWeightLight)}>Let&apos;s chat!</h1>
			<div className={styles.formContainer}>
				<form action="">
					<div className={b.field}>
						<label className={b.label} htmlFor="name">
							Name
							<div className={cx(b.control, b.hasIconsLeft, styles.control)}>
								<input
									className={b.input}
									type="text"
									id="name"
									placeholder="Name"
								/>
								<span className={cx(b.icon, b.isSmall, b.isLeft)}>
									<i className="far fa-user-circle" />
								</span>
							</div>
						</label>
					</div>
					<div className={b.field}>
						<label className={b.label} htmlFor="emailAddress">
							Email address
							<div className={cx(b.control, b.hasIconsLeft, styles.control)}>
								<input
									className={b.input}
									type="email"
									id="emailAddress"
									placeholder="Email"
								/>
								<span className={cx(b.icon, b.isSmall, b.isLeft)}>
									<i className="far fa-envelope" />
								</span>
							</div>
						</label>
					</div>
					<div className={b.field}>
						<label className={b.label} htmlFor="message">
							Message
							<div className={cx(b.control, styles.control)}>
								<textarea
									className={b.textarea}
									type="text"
									id="message"
									placeholder="What should we talk about?"
								/>
							</div>
						</label>
					</div>
					<div className={b.field}>
						<div className={cx(b.control, styles.control)}>
							<button className={b.button} type="submit" onClick={onSubmit}>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</Layout>
)

export default ContactPage
