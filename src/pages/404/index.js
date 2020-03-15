import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import b from '../../styles/bulma.module.scss'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './styles.module.scss'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Not found" />
		<div className={styles.container}>
			<div className={cx(b.title, b.hasTextWeightLight)}>Page not found</div>
			<p>
				Looks like that page doesn&apos;t exist.{' '}
				<Link to="/">Click here to go to the homepage.</Link>
			</p>
		</div>
	</Layout>
)

export default NotFoundPage
