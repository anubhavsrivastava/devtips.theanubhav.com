import React from "react";
import styles from "./Sponsor.module.scss";

const Sponsor = () => (
  <div className={styles["sponsor"]}>
    Consider
    <a target="_blank" href="https://theanubhav.com/sponsor">
      {" "}
      sponsoring
    </a>
  </div>
);

export default Sponsor;
