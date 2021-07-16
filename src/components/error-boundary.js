import * as React from 'react'
import * as Sentry from '@sentry/gatsby'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		Sentry.captureException(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		if (!hasError) {
			// eslint-disable-next-line react/destructuring-assignment
			return this.props.children
		}
		return (
			<div>
				<h1 style={{ fontSize: '25px', padding: '30px' }}>
					Oh no, something broke!
				</h1>
				<p style={{ fontSize: '20px', padding: '30px' }}>
					Sorry about that. An alert was sent to me. Reach out to me on{' '}
					<a
						rel="noreferrer"
						target="_blank"
						href="https://twitter.com/zachrazar"
					>
						twitter
					</a>{' '}
					if this is happening often. Thank you!
				</p>
			</div>
		)
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ErrorBoundary
