// @flow
import React from 'react'

import styles from './styles.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div></div>
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
		<div className={styles.date}>© {new Date().getFullYear()} Zach Azar</div>
	</footer>
)

export default Footer
