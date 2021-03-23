import * as React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

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
			<div className="buttons are-small">
				{tags.map((tag) => (
					<Link
						className={cx('button is-rounded', styles.tag)}
						to={`/blog/tags/${tag}`}
						key={tag}
					>
						{tag}
					</Link>
				))}
			</div>
		</div>
	</div>
)

BlogMetaData.propTypes = {
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BlogMetaData
