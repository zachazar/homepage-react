import * as React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import * as styles from './styles.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.center}>
			<OutboundLink target="blank" href="https://www.linkedin.com/in/zach-azar">
				<i className="fab fa-linkedin-in" />
			</OutboundLink>
			<OutboundLink target="blank" href="https://github.com/zachazar/">
				<i className="fab fa-github" />
			</OutboundLink>
			<OutboundLink target="blank" href="https://twitter.com/zachrazar">
				<i className="fab fa-twitter" />
			</OutboundLink>
		</div>
		<div className={styles.copyright}>
			© 2021 Zach Azar | <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
			<Link to="/cookie-policy">Cookie Policy</Link>
		</div>
	</footer>
)

export default Footer
