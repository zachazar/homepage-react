// @flow

import React from 'react'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './styles.module.scss'
import b from '../../styles/bulma.module.scss'

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
		<div className={cx(styles.container, b.columns)}>
			<div
				className={cx(
					b.column,
					b.isHalf,
					b.isOffsetOneQuarter,
					styles.formContainer
				)}
			>
				<div className={cx(b.title, b.hasTextWeightLight)}>
					Let&apos;s chat!
				</div>
				<form
					name="contactForm"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="important-field"
				>
					<input type="hidden" name="form-name" value="contact" />
					<input type="hidden" name="important-field" />
					<div className={b.field}>
						<label className={b.label} htmlFor="name">
							Name
							<div className={cx(b.control, b.hasIconsLeft, styles.control)}>
								<input
									className={b.input}
									type="text"
									id="name"
									placeholder=""
									required
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
									placeholder=""
									required
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
									required
								/>
							</div>
						</label>
					</div>
					<div className={b.field}>
						<div className={cx(b.control, styles.control)}>
							<button
								className={cx(b.button, b.isMedium, styles.button)}
								type="submit"
							>
								Send it
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</Layout>
)

export default ContactPage
