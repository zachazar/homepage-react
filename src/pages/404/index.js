import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as styles from './styles.module.scss'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Not found" keywords={['not found', 'zach azar', 'gatsby']} />
		<div className={styles.container}>
			<div className={cx('title', 'has-text-weight-light')}>Page not found</div>
			<p>
				Looks like that page doesn&apos;t exist.
				<Link to="/"> Click here to go to the homepage.</Link>
			</p>
			<div className={styles.fogContainer}>
				<p>Maybe it was lost in the San Francisco fog?</p>
				<StaticImage
					src="../../images/fog-404.jpg"
					alt="A foggy lake with some boats"
					layout="fullWidth"
					placeholder="blurred"
				/>
			</div>
			<div className="card">
				<div className="card-content">
					<div className={cx('media', styles.media)}>
						<div className="media-left">
							<StaticImage
								src="../../images/favicon-circle-small.png"
								alt="Photo of Zach"
								className="image is-48x48"
								placeholder="blurred"
							/>
						</div>
						<div className="media-content">
							<p className="title has-text-weight-light is-4">Zach Azar</p>
							<p className="subtitle is-6">
								<a target="blank" href="https://twitter.com/zachrazar">
									@zachrazar
								</a>
							</p>
						</div>
					</div>
					<div className="content">
						<p>
							Let me know if this seems like an error using{' '}
							<Link to="/contact">the contact page</Link>. Thank you!
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default NotFoundPage
