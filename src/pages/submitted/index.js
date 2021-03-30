import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as styles from './styles.module.scss'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Submitted" keywords={['submitted', 'zach azar', 'gatsby']} />
		<div className={styles.container}>
			<div className={cx('title', 'has-text-weight-light')}>Sent 📬 </div>
			<p>
				Thanks for reaching out!
				<Link to="/"> Click here to go back to the homepage.</Link>
			</p>
			<div className={styles.rooContainer}>
				<StaticImage
					src="../../images/rooney-face.jpg"
					alt="My dog Rooney making a ridiculous face"
					placeholder="blurred"
					aspectRatio={3024 / 3537}
					width={500}
				/>
				<p>You&apos;ve earned a bonus picture of Rooney. Nice work.</p>
			</div>
		</div>
	</Layout>
)

export default NotFoundPage
