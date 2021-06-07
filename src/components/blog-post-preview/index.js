import * as React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'

import BlogMetaData from '../blog-meta-data'
import * as styles from './styles.module.scss'

const BlogPostPreview = ({
	post: {
		timeToRead,
		frontmatter: {
			date,
			slug,
			title,
			primaryTitle,
			subtitle,
			tags,
			image,
			imageAlt,
			description,
		},
	},
}) => (
	<div className="columns">
		<div className={cx('column', styles.thumbnailContainer)}>
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				alt={imageAlt}
				className={styles.thumbnail}
				placeholder="blurred"
				tabIndex={0}
				onClick={() => navigate(slug)}
				onKeyPress={() => navigate(slug)}
			/>
		</div>
		<div className="column is-three-fifths">
			<p className={cx('title has-text-weight-light', styles.titleContainer)}>
				<Link to={slug} className={styles.title}>
					{primaryTitle || title}
				</Link>
			</p>
			{subtitle && (
				<p
					className={cx(
						'subtitle has-text-weight-light',
						styles.titleContainer
					)}
				>
					{subtitle}
				</p>
			)}
			<div className={styles.metaContainer}>
				<BlogMetaData date={date} timeToRead={timeToRead} tags={tags} />
			</div>
			<Link className={styles.description} to={slug}>
				{description}
			</Link>
		</div>
	</div>
)

BlogPostPreview.propTypes = {
	post: PropTypes.shape({
		timeToRead: PropTypes.number,
		frontmatter: PropTypes.shape({
			description: PropTypes.string,
			date: PropTypes.string,
			slug: PropTypes.string,
			title: PropTypes.string,
			primaryTitle: PropTypes.string,
			subtitle: PropTypes.string,
			timeToRead: PropTypes.number,
			tags: PropTypes.arrayOf(PropTypes.string),
			imageAlt: PropTypes.string,
			// eslint-disable-next-line react/forbid-prop-types
			image: PropTypes.object,
		}),
	}).isRequired,
}

export default BlogPostPreview
