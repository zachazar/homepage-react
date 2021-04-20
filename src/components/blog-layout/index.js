import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import SubscriptionForm from '../subscription-form'
import TagList from '../tag-list'
import * as styles from './styles.module.scss'

const BlogLayout = ({
	hasBackButton = false,
	children,
	tags,
	activeTag,
	showSideInfo,
}) => (
	<div
		className={cx(styles.container, {
			[styles.slimTop]: hasBackButton,
			[styles.slimRightSide]: showSideInfo,
		})}
	>
		{hasBackButton ? (
			<div className={cx(styles.back, 'level')}>
				<div className="level-left">
					<Link to="/blog" className="level-item">
						<i className="fas fa-chevron-left" />
						<span className={styles.afterIcon}>Blog</span>
					</Link>
				</div>
				<div className="level-right">
					{tags && <TagList tags={tags} activeTag={activeTag} />}
				</div>
			</div>
		) : (
			<div className={styles.topSpacer} />
		)}
		<div className="columns">
			<div
				className={cx('column', styles.leftSpacingColumn, {
					[styles.alwaysHide]: showSideInfo,
				})}
			/>

			<div className="column is-four-fifths">{children}</div>
			<div className="column">
				{showSideInfo && (
					<>
						<div className={styles.sideSpacerUpper} />
						<SubscriptionForm />
						<div className={styles.sideSpacerBetweenElements} />
						<div className="card">
							<div className="card-content">
								You can also find me on Twitter{' '}
								<a target="blank" href="https://twitter.com/zachrazar">
									<i className="fab fa-twitter" />
								</a>
							</div>
						</div>
						<div className={styles.sideSpacerBetweenElements} />
						<div className="card">
							<div className="card-content">
								<a target="blank" href="/rss.xml">
									RSS
									<i className="fas fa-rss pl-1" />
								</a>{' '}
								available
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	</div>
)

BlogLayout.defaultProps = {
	hasBackButton: false,
	tags: null,
	activeTag: null,
	showSideInfo: false,
}

BlogLayout.propTypes = {
	hasBackButton: PropTypes.bool,
	children: PropTypes.node.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
	activeTag: PropTypes.string,
	showSideInfo: PropTypes.bool,
}

export default BlogLayout
