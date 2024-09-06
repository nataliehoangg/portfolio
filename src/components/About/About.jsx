import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>I am a...</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Image of me."
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/paletteIcon.png")} alt="Palette icon" />
            <div className={styles.aboutItemText}>
              <h3>Artist</h3>
              <p>
                I have video editing, photo editing, graphic design, and digital art experience on platforms such as After Effects, Adobe Illustrator, Adobe Lightroom, Canva, and Procreate.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience in designing and implementing the interface of websites!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gearIcon.png")} alt="Engineer icon" />
            <div className={styles.aboutItemText}>
              <h3>Engineer</h3>
              <p>
                Driven by my passion for learning, I love contributing my skills to meaningful projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};