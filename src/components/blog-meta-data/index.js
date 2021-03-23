import * as React from 'react'
import PropTypes from 'prop-types'

import TagList from '../tag-list'
import * as styles from './styles.module.scss'

const BlogMetaData = ({ date, timeToRead, tags }) => (
	<div className={styles.info}>
		<div>
			<i className="fas fa-calendar-alt" />
			<p className={styles.afterIcon}>{date}</p>
		</div>
		<div className={styles.spacer} />
		<div>
			<i className="fas fa-book-open" />
			<p className={styles.afterIcon}>{`${timeToRead} min`}</p>
		</div>
		<div className={styles.spacer} />
		<div>
			<TagList tags={tags} />
		</div>
	</div>
)

BlogMetaData.propTypes = {
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BlogMetaData
