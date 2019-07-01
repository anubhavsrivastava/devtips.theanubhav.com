import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
	<div className={styles['author']}>
		<Link to="/">
			<img src={author.photo} className={styles['author__photo']} width="75" height="75" alt={author.name} />
		</Link>

		{isIndex ? (
			<h1 className={styles['author__title']}>
				<Link className={styles['author__title-link']} to="/">
					{author.name}
				</Link>
			</h1>
		) : (
			<h2 className={styles['author__title']}>
				<Link className={styles['author__title-link']} to="/">
					{author.name}
				</Link>
			</h2>
		)}
		<p className={styles['author__subtitle']}>{author.bio}</p>
		<p className={styles['author__subtitle']}>
			<a style={{ margin: '20px' }} href="//about.theanubhav.com">
				About me
			</a>

			<a style={{ margin: '20px' }} href="//theanubhav.com">
				Blogs
			</a>
		</p>
		<h2 className={styles['author__title']}>
			<Link className={styles['author__title-link']} to="/">
				Checkout Series
			</Link>
		</h2>
		<p className={styles['author__subtitle']}>
			<Link style={{ margin: '20px' }} to="/category/cli-build-tool">
				CLI Build Tool
			</Link>
		</p>

		<p className={styles['author__subtitle']}>Site for personal quick tips for Web Developers</p>
	</div>
);

export default Author;
