import * as React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlogMetaData from '../blog-meta-data'

import * as styles from './styles.module.scss'

const BlogPostPreviewSmall = ({
	post: {
		timeToRead,
		frontmatter: { date, slug, title, image, imageAlt },
	},
}) => (
	<div
		className={cx('card container', styles.container)}
		role="button"
		tabIndex={0}
		onClick={() => navigate(slug)}
		onKeyPress={() => navigate(slug)}
	>
		<div className={cx('card-image', styles.thumbnailContainer)}>
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				alt={imageAlt}
				className={styles.thumbnail}
				placeholder="blurred"
			/>
		</div>
		<div className="card-content">
			<div className="content">
				<p className={cx('title has-text-weight-light', styles.titleContainer)}>
					<Link to={slug} className={styles.title}>
						{title}
					</Link>
				</p>
				<BlogMetaData date={date} timeToRead={timeToRead} />
			</div>
		</div>
	</div>
)

BlogPostPreviewSmall.propTypes = {
	post: PropTypes.shape({
		timeToRead: PropTypes.number,
		frontmatter: PropTypes.shape({
			date: PropTypes.string,
			slug: PropTypes.string,
			title: PropTypes.string,
			timeToRead: PropTypes.number,
			imageAlt: PropTypes.string,
			// eslint-disable-next-line react/forbid-prop-types
			image: PropTypes.object,
		}),
	}).isRequired,
}

export default BlogPostPreviewSmall
