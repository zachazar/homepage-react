import * as React from 'react'
import PropTypes from 'prop-types'

import BlogPostPreview from '../blog-post-preview'
import * as styles from './styles.module.scss'

const BlogPreviewList = ({ posts }) =>
	posts.map(({ node: post }) => (
		<div className={styles.post} key={post.id}>
			<BlogPostPreview post={post} />
		</div>
	))

BlogPreviewList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			timeToRead: PropTypes.number,
			frontmatter: PropTypes.shape({
				date: PropTypes.string,
				description: PropTypes.string,
				slug: PropTypes.string,
				title: PropTypes.string,
				timeToRead: PropTypes.number,
				tags: PropTypes.arrayOf(PropTypes.string),
				imageAlt: PropTypes.string,
				// eslint-disable-next-line react/forbid-prop-types
				image: PropTypes.object,
			}),
		})
	),
}

export default BlogPreviewList
