// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Footer from '../footer'
import styles from './styles.module.scss'

const Layout = ({ children }: { children: PropTypes.node }) => (
	<div className={styles.container}>
		<Header />
		<div className={styles.main}>{children}</div>
		<Footer />
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
