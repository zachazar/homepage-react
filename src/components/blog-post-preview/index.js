import * as React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import * as styles from './styles.module.scss'

const BlogPostPreview = ({
	post: {
		excerpt,
		timeToRead,
		frontmatter: { date, slug, title, tags, image, imageAlt },
	},
}) => (
	<div className={styles.container}>
		<div className="columns">
			<div className="column">
				<GatsbyImage
					image={image.childImageSharp.gatsbyImageData}
					alt={imageAlt}
				/>
			</div>
			<div className="column is-three-fifths">
				<p className="title has-text-weight-light">
					<Link to={slug} className={styles.title}>
						{title}
					</Link>
				</p>
				<div className={styles.info}>
					<div>
						<i className="fas fa-calendar-alt" />
						<p className={styles.afterIcon}>{date}</p>
					</div>
					<div className={cx(styles.spacer)} />
					<div>
						<i className="fas fa-book-open" />
						<p className={styles.afterIcon}>{`${timeToRead} min`}</p>
					</div>
					<div className={cx(styles.spacer)} />
					<div>
						<div className="buttons are-small">
							{tags.map((tag) => (
								<Link
									className={cx('button is-rounded', styles.tag)}
									to={`blog/tags/${tag}`}
									key={tag}
								>
									{tag}
								</Link>
							))}
						</div>
					</div>
				</div>
				<Link className={styles.excerpt} to={slug}>
					{excerpt}
				</Link>
			</div>
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
