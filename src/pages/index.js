import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WALDO ⋅ Anticheat powered by AI</title>
      </Head>

      <header className={styles.header}>
        <div className="container">
          <div className={clsx(styles.header_row, "row")}>
            <div className={clsx(styles.header_row_col__4_col__offset_1, "col col--4 col--offset-1")}>
              <h1 className={styles.header_row_col__4_col__offset_1__title}>WALDO</h1>
              <p className={styles.header_row_col__4_col__offset_1__subtitle}>The Official WALDO Documentation</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--outline button--primary button--lg', styles.header_row_col__4_col__offset_1__getStarted,)}
                  to='/docs'>
                  Get Started
                </Link>
                <Link
                  className={clsx('button button--outline button--primary button--lg', styles.header_row_col__4_col__offset_1__learnMore,)}
                  to='/blog/faq'>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={clsx(styles.header_row_col__6_col__offset_1, "col col--6 col--offset-1")}>
              <img className={styles.header_row_col__6_col__offset_1__img} src='img/spin.gif' alt='WALDO' />
            </div>
          </div>
        </div>
      </header>

    </Layout>
  );
}
