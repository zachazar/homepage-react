import * as React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import BlogMetaData from '../blog-meta-data'
import * as styles from './styles.module.scss'

const BlogPostPreview = ({
	post: {
		excerpt,
		timeToRead,
		frontmatter: { date, slug, title, tags, image, imageAlt },
	},
}) => (
	<div className="columns">
		<div className="column">
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				alt={imageAlt}
				className={styles.thumbnail}
				tabIndex={0}
				onClick={() => navigate(slug)}
				onKeyPress={() => navigate(slug)}
			/>
		</div>
		<div className="column is-three-fifths">
			<p className="title has-text-weight-light">
				<Link to={slug} className={styles.title}>
					{title}
				</Link>
			</p>
			<BlogMetaData date={date} timeToRead={timeToRead} tags={tags} />
			<Link className={styles.excerpt} to={slug}>
				{excerpt}
			</Link>
		</div>
	</div>
)

BlogPostPreview.propTypes = {
	post: PropTypes.shape({
		excerpt: PropTypes.string,
		timeToRead: PropTypes.number,
		frontmatter: PropTypes.shape({
			date: PropTypes.string,
			slug: PropTypes.string,
			title: PropTypes.string,
			timeToRead: PropTypes.number,
			tags: PropTypes.arrayOf(PropTypes.string),
			imageAlt: PropTypes.string,
			// eslint-disable-next-line react/forbid-prop-types
			image: PropTypes.object,
		}),
	}).isRequired,
}

export default BlogPostPreview
