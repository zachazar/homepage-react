// @flow

import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Header = () => (
	<div className={styles.navBar}>
		<div className={styles.navHeader}>
			<Link className={styles.navLink} to="/">
				Zach Azar
			</Link>
		</div>
		<div className={styles.navRight}>
			<Link className={styles.navLink} activeClassName={styles.active} to="/">
				Résumé
			</Link>
			<Link
				className={styles.navLink}
				activeClassName={styles.active}
				to="/about"
			>
				About
			</Link>
			<Link
				className={styles.navLink}
				activeClassName={styles.active}
				to="/contact"
			>
				Contact
			</Link>
		</div>
	</div>
)

export default Header
