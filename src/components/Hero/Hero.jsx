import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Natalie!</h1>
        <p className={styles.description}>
            I'm currently a second-year undergraduate student at UC Berkeley studying Electrical Engineering & Computer Science.
        </p>
        <a href="mailto:NTALIEA@berkeley.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
