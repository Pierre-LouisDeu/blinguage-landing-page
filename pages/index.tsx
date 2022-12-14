import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blinguage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Learn Japanese</h1>
            <p>
              Visiting the temples in Kyoto, getting a new job, or making a
              personal connection <br />
              -no mattter why you want to learn, we have the right course for
              you.
            </p>
            <button className={styles.buttonSecondary}>Get Started</button>
          </div>
        </section>

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
              <span>Detailed lessons</span> lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
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
      </main>
    </>
  );
}
