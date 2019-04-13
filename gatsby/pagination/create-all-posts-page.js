'use strict';

const path = require('path');
// const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
				totalCount
			}
		}
	`);

	// const { postsPerPage } = siteConfig;
	const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / 10);

	let i = 0;
	createPage({
		path: `/all`,
		component: path.resolve('./src/templates/index-min-template.js'),
		context: {
			currentPage: i,
			postsLimit: 10,
			postsOffset: i * 10,
			prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
			nextPagePath: `/page/${i + 1}`,
			hasPrevPage: i !== 0,
			hasNextPage: i !== numPages - 1
		}
	});
};
