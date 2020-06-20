import React from "react";
import { Link } from "gatsby";
import styles from "./Author.module.scss";

const Author = ({ author, isIndex }) => (
  <div className={styles["author"]}>
    <Link to="/">
      <img
        src={author.photo}
        className={styles["author__photo"]}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex ? (
      <h1 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h2>
    )}

    <p className={styles["author__subtitle"]}>Personal quick tips for Web Developers</p>

    {/* <p className={styles["author__subtitle"]}>{author.bio}</p> */}
    <p className={styles["author__subtitle"]}>
      <a style={{ margin: "20px" }} href="//about.theanubhav.com">
        About me
      </a>

      <a style={{ margin: "20px" }} href="//theanubhav.com">
        Blog
      </a>
    </p>

    <h2 className={styles["author__title"]}>
      <Link className={styles["author__title-link"]} to="/">
        Series Posts
      </Link>
    </h2>
    <p className={styles["author__subtitle"]}>
      <Link style={{ margin: "20px" }} to="/category/vs-code-ide">
        VSCode Extensions
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/category/js-pitfall">
        JavaScript Pitfalls
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/category/package-manager">
        Package Managers
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/category/chrome">
        Chrome Devtools
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/category/cli-build-tool">
        CLI Build Tool
      </Link>
    </p>

    <h2 className={styles["author__title"]}>
      <Link className={styles["author__title-link"]} to="/">
        Links
      </Link>
    </h2>
    <p className={styles["author__subtitle"]}>
      <Link style={{ margin: "20px" }} to="/all">
        All Tips
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/categories">
        Categories
      </Link>
      <br />
      <Link style={{ margin: "20px" }} to="/tags">
        Tags
      </Link>
    </p>
  </div>
);

export default Author;
