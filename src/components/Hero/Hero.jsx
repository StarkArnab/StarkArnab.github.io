import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title} id="user-detail-name">
          Hi, I'm Arnab
        </h1>
        <p className={styles.description} id="user-detail-intro">
          Enthusiastic Full Stack Developer. Fresh graduate with expertise in
          React, JS and a passion for innovation.
        </p>
        <a href="mailto:rockarnab367@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
          onClick={() => {
            window.open("../../../assets/resume/dummyresume.pdf", "_blank");
          }}
          href="../../../assets/resume/dummyresume.pdf"
          download
          target="_blank"
          className={styles.contactBtn}
          style={{ marginTop: "10px" }}
          id="resume-button-2"
        >
          Resume
        </a>
      </div>
      <div className="home-img" src="true"></div>
      <img
        src={getImageUrl("hero/ResumeHeroPhoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
