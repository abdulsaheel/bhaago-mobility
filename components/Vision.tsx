// components/VisionSection.jsx
import React from "react";
import styles from "./VisionSection.module.css"; // CSS module import

const VisionSection = () => {
  return (
    <section className={styles.visionSection}>
      {/* Top banner/title */}
      <div className={styles.banner}>
        <h2 className={styles.heading}>Vision</h2>
      </div>

      {/* Content area with background image and overlay */}
    <div className={styles.contentContainer} >
      <div className={styles.overlay}>
        <h3 className={styles.title}>
        Give every pedestrian <br/>the ability to{" "}
        <span className={styles.highlight}><strong>get off the road</strong></span>
        </h3>
        <p className={styles.subtitle}>
        We want fewer people dodging traffic and more riding safe &amp; affordably.
        </p>
      </div>
    </div>
    {/* Vertical Gap */}
    <div className={styles.VerticalGap}></div>
    </section>
  );
};

export default VisionSection;
