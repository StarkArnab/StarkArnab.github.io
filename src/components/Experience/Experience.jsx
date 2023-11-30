import React from "react";
import GithubCalendar from "react-github-calendar";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skills-card">
                <div className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className="skills-card-img"
                    />
                  </div>
                  <p className="skills-card-name">{skill.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="github-stats"
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <a href="https://git.io/streak-stats">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=StarkArnab&theme=transparent&date_format=j%20M%5B%20Y%5D&background=0B2447"
              alt="GitHub Streak"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </div>
        <div style={{ marginTop: "50px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=StarkArnab&theme=transparent"
            id="github-stats-card"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=StarkArnab&hide_progress=true&theme=transparent"
            style={{ maxWidth: "100%", height: "auto" }}
            id="github-top-langs"
          />
        </div>
        <div
          style={{ marginTop: "50px", maxWidth: "100%", height: "auto" }}
          id="github-streak-stats"
          src={true}
        >
          <GithubCalendar
            username="StarkArnab"
            style={{
              marginTop: "50px",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};
