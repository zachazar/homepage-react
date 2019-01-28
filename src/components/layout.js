// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({ children }: { children: PropTypes.node }) => (
	<div>
		<Header />
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `0px 1.0875rem 1.45rem`,
				paddingTop: 0,
			}}
		>
			{children}
			<footer>© {new Date().getFullYear()}, Zach Azar</footer>
		</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
