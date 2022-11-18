import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <a className={styles.logo}></a>
        <ul>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              Courses
            </a>
          </li>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              Support
            </a>
          </li>
          <li>
            <button className={styles.buttonPrimary}>Get Started</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
