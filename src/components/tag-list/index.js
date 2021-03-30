import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import * as styles from './styles.module.scss'

const tagToSlug = (tag) => tag.replace(' ', '-')

const TagList = ({ tags, activeTag }) => (
	<div className={cx('buttons are-small', styles.tags)}>
		{tags.map((tag) => (
			<Link
				className={cx('button is-rounded', {
					[styles.active]: tag === activeTag,
				})}
				to={`/blog/tags/${tagToSlug(tag)}`}
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
