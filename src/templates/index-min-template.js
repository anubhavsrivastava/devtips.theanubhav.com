import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { FeedMinimal } from '../components/Feed/Feed';
import Page from '../components/Page';

const IndexMinTemplate = ({ data, pageContext }) => {
	const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

	const { edges } = data.allMarkdownRemark;
	const pageTitle = `All Posts - ${siteTitle}`;

	return (
		<Layout title={pageTitle} description={siteSubtitle}>
			<Sidebar isIndex />
			<Page>
				<FeedMinimal edges={edges} />
			</Page>
		</Layout>
	);
};

export const query = graphql`
	query IndexMinTemplate($postsLimit: Int!, $postsOffset: Int!) {
		site {
			siteMetadata {
				title
				subtitle
			}
		}
		allMarkdownRemark(limit: $postsLimit, skip: $postsOffset, filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					fields {
						slug
						categorySlug
					}
					frontmatter {
						title
						date
						category
						description
					}
				}
			}
		}
	}
`;

export default IndexMinTemplate;
