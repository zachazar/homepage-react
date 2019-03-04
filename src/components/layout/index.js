// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import styles from './styles.module.scss'

const Layout = ({ children }: { children: PropTypes.node }) => (
	<div className={styles.container}>
		<Header />
		<div className={styles.main}>{children}</div>
		<footer className={styles.footer}>
			<div>
				<a
					className={styles.socialLink}
					target="blank"
					href="https://www.linkedin.com/in/zach-azar"
				>
					<i className="fab fa-linkedin-in" />
				</a>
				<a
					className={styles.socialLink}
					target="blank"
					href="https://github.com/zachazar/"
				>
					<i className="fab fa-github" />
				</a>
			</div>
			<div>© {new Date().getFullYear()} Zach Azar</div>
		</footer>
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
