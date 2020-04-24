import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Author from "./Author";
import Contacts from "./Contacts";
import Sponsor from "./Sponsor";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

export const PureSidebar = ({ data, isIndex }) => {
  const { author, copyright, menu } = data.site.siteMetadata;

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        {/* <Menu menu={menu} /> */}
        <Contacts contacts={author.contacts} />
        <Sponsor />
        <Newsletter />
        {/* <Copyright copyright={copyright} /> */}
      </div>
    </div>
  );
};

export const Sidebar = props => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {
                twitter
                github
                email
              }
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
