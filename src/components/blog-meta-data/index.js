import * as React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import TagList from '../tag-list'
import * as styles from './styles.module.scss'

const BlogMetaData = ({ date, timeToRead, tags }) => (
	<div className="level">
		<div
			className={cx(styles.info, {
				'level-left': tags,
				'level-item': !tags,
			})}
		>
			<div className="level-item">
				<i className="fas fa-calendar-alt" />
				<p className={styles.afterIcon}>{date}</p>
				<span className={styles.readInfo}>
					<i className="fas fa-book-open" />
					<p className={styles.afterIcon}>{`${timeToRead} min`}</p>
				</span>
				{tags && (
					<div className="level-item">
						<TagList tags={tags} />
					</div>
				)}
			</div>
		</div>
	</div>
)

BlogMetaData.defaultProps = {
	tags: null,
}

BlogMetaData.propTypes = {
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
}

export default BlogMetaData
