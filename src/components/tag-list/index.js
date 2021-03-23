import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import * as styles from './styles.module.scss'

const TagList = ({ tags, activeTag }) => (
	<div className={cx(styles.tags, 'buttons are-small')}>
		{tags.map((tag) => (
			<Link
				className={cx('button is-rounded', styles.tag, {
					[styles.active]: tag === activeTag,
				})}
				to={`/blog/tags/${tag}`}
				key={tag}
			>
				{tag}
			</Link>
		))}
	</div>
)

TagList.defaultProps = {
	activeTag: '',
}

TagList.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeTag: PropTypes.string,
}

export default TagList
