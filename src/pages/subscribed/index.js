import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as styles from './styles.module.scss'

const Subscribed = () => (
	<Layout>
		<SEO title="Subscribed" keywords={['subscribed', 'zach azar']} />
		<div className={styles.container}>
			<p className="title is-spaced has-text-weight-light">Subscribed 🎉 </p>
			<p className="subtitle ">Thanks for subscribing!</p>
			<div className={styles.rooContainer}>
				<p>
					You&apos;ve earned a bonus picture of my dog Rooney looking
					ridiculous. Nice work!
				</p>
				<StaticImage
					src="../../images/rooney-face.jpg"
					alt="My dog Rooney making a ridiculous face"
					placeholder="blurred"
					aspectRatio={3024 / 3537}
					width={500}
				/>
			</div>
		</div>
	</Layout>
)

export default Subscribed
