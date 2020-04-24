import React from "react";
import styles from "./Sponsor.module.scss";

const Sponsor = () => (
  <div className={styles["sponsor"]}>
    Become a
    <a target="_blank" href="https://theanubhav.com/sponsor">
      {" "}
      sponsor
    </a>
  </div>
);

export default Sponsor;
