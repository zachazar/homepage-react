import * as React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import * as styles from './styles.module.scss'

const BlogPostPreview = ({
	post: {
		excerpt,
		timeToRead,
		frontmatter: { date, slug, title, tags, image },
	},
}) => (
	<div className={styles.container}>
		<div className="columns">
			<div className="column">
				{/* <StaticImage
					src={image}
					alt="Photo of Zach"
					layout="constrained"
					width={250}
					onClick={() => navigate(slug)}
					className={styles.thumbnail}
					role="link"
					onKeyPress={() => navigate(slug)}
					tabIndex={0}
				/> */}
				{/* <GatsbyImage fluid={image.childImageSharp.fluid} /> */}
			</div>
			<div className="column">
				<p className="title has-text-weight-light">
					<Link to={slug} className={styles.title}>
						{title}
					</Link>
				</p>
				<div className="level">
					<div className="level-left">
						<div className="level-item">
							<i className="fas fa-calendar-alt" />
							<p className={styles.afterIcon}>{date}</p>
						</div>
						<div className={cx('level-item', styles.spacer)} />
						<div className="level-item">
							<i className="fas fa-book-open" />
							<p className={styles.afterIcon}>{`${timeToRead} min`}</p>
						</div>
						<div className={cx('level-item', styles.spacer)} />
						<div className="level-item">
							<div className="level buttons are-small">
								{tags.map((tag) => (
									<Link
										className={cx(
											'level-item',
											'button is-rounded',
											styles.tag
										)}
										to={`blog/tags/${tag}`}
									>
										{tag}
									</Link>
								))}
							</div>
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
	post: PropTypes.objectOf({
		excerpt: PropTypes.string,
		frontmatter: PropTypes.objectOf({
			date: PropTypes.string,
			slug: PropTypes.string,
			title: PropTypes.string,
			timeToRead: PropTypes.number,
			tags: PropTypes.arrayOf(PropTypes.string),
			// image: PropTypes.string,
		}),
	}).isRequired,
}

export default BlogPostPreview
