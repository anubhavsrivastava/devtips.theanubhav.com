import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter = () => (
  <div className={styles["newsletter"]}>
    Subscribe to
    <a target="_blank" href="https://devtips.substack.com">
      {" "}
      devtips's newsletter
    </a>
  </div>
);

export default Newsletter;
