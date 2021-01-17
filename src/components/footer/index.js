// @flow
import React from 'react'

import styles from './styles.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div>
			<div className={styles.center}>
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
				<a
					className={styles.socialLink}
					target="blank"
					href="https://twitter.com/zachrazar"
				>
					<i className="fab fa-twitter" />
				</a>
			</div>
			<div className={styles.copyright}>© 2021 Zach Azar</div>
		</div>
	</footer>
)

export default Footer
