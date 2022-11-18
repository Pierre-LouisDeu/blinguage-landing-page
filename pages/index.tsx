import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stoic wisdom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Hero />
        <Courses />
      </main>
    </>
  );
}
