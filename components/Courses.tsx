import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Courses: React.FunctionComponent = () => {
  return (
    <>
      <section className={styles.coursesContainer}>
        <div className={styles.course}>
          <Image
            src="/assets/book.png"
            className={styles.courseImage}
            alt="headphones"
            width={103}
            height={97}
          />
          <p>
            <span>Detailed lessons</span> lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className={styles.course}>
          <Image
            src="/assets/headset.png"
            className={styles.courseImage}
            alt="hero"
            width={103}
            height={97}
          />
          <p>
            <span>Engaging audio</span> lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className={styles.course}>
          <Image
            src="/assets/book.png"
            className={styles.courseImage}
            alt="hero"
            width={103}
            height={97}
          />
          <p>
            <span>Flexible subscription</span> lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
      </section>
    </>
  );
};

export default Courses;
