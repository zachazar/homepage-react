// @flow

import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Header = () => (
	<div className={styles.navBar}>
		<div className={styles.title}>Zach Azar</div>
		<Link className={styles.navLink} activeClassName={styles.active} to="/">
			About
		</Link>
		<Link
			className={styles.navLink}
			activeClassName={styles.active}
			to="/resume"
		>
			Résumé
		</Link>
		<Link
			className={styles.navLink}
			activeClassName={styles.active}
			to="/contact"
		>
			Contact
		</Link>
	</div>
)

export default Header
