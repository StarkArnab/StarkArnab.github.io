import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="project-card">
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className="project-title">
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className="project-description">
          <p className={styles.description}>{description}</p>
        </div>
        <div className="project-tech-stack">
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.links}>
          <div className="project-deployed-link">
            <a href={demo} className={styles.link} target="_blank">
              Demo
            </a>
          </div>
          <div className="project-github-link">
            <a href={source} className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
