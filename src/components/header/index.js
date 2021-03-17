import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './styles.module.scss'

const Header = () => (
	<div className={styles.navBar}>
		<div>
			<Link to="/">
				<div className={styles.title}>
					Zach
					<span className={styles.lastName}> Azar</span>
				</div>
			</Link>
		</div>
		<div className={styles.rightLinks}>
			<Link className={styles.navLink} activeClassName={styles.active} to="/">
				About
			</Link>
			<Link
				className={styles.navLink}
				activeClassName={styles.active}
				to="/blog"
			>
				Blog
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
	</div>
)

export default Header
