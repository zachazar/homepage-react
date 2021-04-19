import React, { useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './styles.module.scss'

// Reference: https://www.codewithlinda.com/blog/email-newsletter-subscription-for-gatsby-using-convertkit/

const STATUSES = {
	DEFAULT: 'DEFAULT',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
}

const SubscriptionForm = () => {
	const [status, setStatus] = useState(STATUSES.DEFAULT)
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')

	const FORM_URL = `https://app.convertkit.com/forms/2194421/subscriptions`

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus(STATUSES.LOADING)
		const data = new FormData(e.target)
		try {
			const response = await fetch(FORM_URL, {
				method: 'post',
				body: data,
				headers: {
					accept: 'application/json',
				},
			})
			const json = await response.json()
			if (json.status === 'success') {
				setStatus(STATUSES.SUCCESS)
				return
			}
			throw new Error('failed', json)
		} catch (err) {
			setStatus(STATUSES.ERROR)
			// eslint-disable-next-line no-console
			console.log(err)
		}
	}

	const FeedbackText = () => {
		switch (status) {
			case 'SUCCESS':
				return (
					<p className={styles.feedback}>
						Welcome! Please check your email for a confirmation.
					</p>
				)
			case 'ERROR':
				return (
					<p className={styles.feedback}>
						Hmm, something went wrong 🤔. Please try again. If the problem
						continues, <Link to="/contact">contact me</Link>. Thanks!
					</p>
				)
			default:
				return <></>
		}
	}
	const buttonText = () => {
		switch (status) {
			case STATUSES.LOADING:
				return 'Sending ...'
			case STATUSES.SUCCESS:
				return 'Subscribed 🎉'
			default:
				return 'Subscribe 🤘'
		}
	}
	return (
		<div className="card">
			<div className="card-content">
				<div className="sub">
					<p className="subtitle">Join my newsletter to never miss a post</p>
					<form action={FORM_URL} method="post" onSubmit={handleSubmit}>
						<fieldset disabled={status === STATUSES.LOADING}>
							<div className="field">
								<div className="control has-icons-left">
									<input
										type="text"
										aria-label="Firs name"
										name="fields[first_name]"
										placeholder="First Name"
										onChange={(e) => setName(e.target.value)}
										value={name}
										className="input is-small"
										required
										id="name"
									/>
									<span className="icon is-left">
										<i className="far fa-user-circle" />
									</span>
								</div>
							</div>
							<div className="field">
								<div className="control has-icons-left">
									<input
										type="email"
										aria-label="Your email"
										name="email_address"
										placeholder="Email address"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										className="input is-small"
										required
										id="email"
									/>
									<span className="icon is-left">
										<i className="far fa-envelope" />
									</span>
								</div>
							</div>

							<div className="field">
								<div className="control">
									<button type="submit" className="button is-small">
										{buttonText()}
									</button>
								</div>
							</div>
						</fieldset>
					</form>
					<p className={styles.disclaimer}>
						I won&apos;t spam you. Unsubscribe at any time.
					</p>
					<FeedbackText />
				</div>
			</div>
		</div>
	)
}

export default SubscriptionForm
