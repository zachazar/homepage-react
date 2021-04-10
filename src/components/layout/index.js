import * as React from 'react'
import PropTypes from 'prop-types'
import Header from '../header'
import Footer from '../footer'
import * as styles from './styles.module.scss'

const Layout = ({ children }) => (
	<div className={styles.root}>
		<Header />
		<div className={styles.main}>{children}</div>
		<Footer />
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}
export default Layout
