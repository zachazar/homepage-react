import * as React from 'react'
import { Link } from 'gatsby'
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
				Looks like that page doesn&apos;t exist.{' '}
				<Link to="/">Click here to go to the homepage.</Link>
			</p>
		</div>
	</Layout>
)

export default NotFoundPage
