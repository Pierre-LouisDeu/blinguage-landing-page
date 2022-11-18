import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import skeletonStyle from "../styles/Skeleton.module.scss";

const SkeletonText = () => {
  return (
    <div className={skeletonStyle.skeletonContainer}>
      <div className={skeletonStyle.skeletonText} />
      <div className={skeletonStyle.skeletonText}></div>
      <div className={skeletonStyle.skeletonText}></div>
      <div className={skeletonStyle.skeletonFooter}></div>
    </div>
  );
};

const Hero: React.FunctionComponent = () => {
  const [reload, setReload] = useState(false);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const fetchQuote = async () => {
    const response = await fetch("https://stoic-quotes.com/api/quote");
    const data = await response.json();
    setQuote(data.text);
    setAuthor(data.author);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchQuote();
    }, 2000);
  }, [reload]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Stoic Wisdom Dispenser</h1>
          {quote ? (
            <p>
              &quot;{quote}&quot; <br />
              <br />
              <span>- {author}</span>
            </p>
          ) : (
            <SkeletonText />
          )}
          <button
            className={styles.buttonSecondary}
            onClick={() => setReload(!reload)}
          >
            Next quote
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
