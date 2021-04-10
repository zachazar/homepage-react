import * as React from 'react'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as styles from './styles.module.scss'

const ContactPage = () => {
	// Focus on the name field on mount
	const nameInputRef = React.useRef()
	React.useEffect(() => {
		nameInputRef.current.focus()
	}, [])
	return (
		<Layout>
			<SEO
				title="Contact"
				keywords={['zach azar', 'contact', 'blog', 'gatsby', 'react']}
			/>
			<div className={cx(styles.container, 'container is-max-desktop')}>
				<div className={cx(styles.columnContainer)}>
					<div
						className={cx(
							'title',
							'has-text-weight-light',
							styles.columnHeader
						)}
					>
						Let&apos;s chat! 👋
					</div>
					<form
						name="homepage-contact-form"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="important-field"
						action="/submitted/"
					>
						<input
							type="hidden"
							name="form-name"
							value="homepage-contact-form"
						/>
						<input type="hidden" name="important-field" />
						<div className="field">
							<label className="label" htmlFor="name">
								Name
								<div
									className={cx('control', 'has-icons-left', styles.control)}
								>
									<input
										className="input"
										type="text"
										id="name"
										name="name"
										placeholder=""
										required
										ref={nameInputRef}
									/>
									<span className={cx('icon', 'is-small', 'is-left')}>
										<i className="far fa-user-circle" />
									</span>
								</div>
							</label>
						</div>
						<div className="field">
							<label className="label" htmlFor="email">
								Email address
								<div
									className={cx('control', 'has-icons-left', styles.control)}
								>
									<input
										className="input"
										type="email"
										id="email"
										name="email"
										placeholder=""
										required
									/>
									<span className={cx('icon', 'is-small', 'is-left')}>
										<i className="far fa-envelope" />
									</span>
								</div>
							</label>
						</div>
						<div className="field">
							<label className="label" htmlFor="message">
								Message
								<div className={cx('control', styles.control)}>
									<textarea
										className="textarea"
										type="text"
										id="message"
										name="message"
										placeholder="What should we talk about?"
										required
									/>
								</div>
							</label>
						</div>
						<div className="field">
							<div className={cx('control', styles.control)}>
								<button
									className={cx('button', 'is-medium', styles.button)}
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
}

export default ContactPage
