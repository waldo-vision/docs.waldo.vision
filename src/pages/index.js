import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>WALDO ⋅ Anticheat powered by AI</title>
        <meta name="description" content={siteConfig.tagline} />
      </Head>
    <main>
      <header className={styles.header}>
        <div className="container">
          <div className={clsx(styles.header_row, "row")}>
            <div className={clsx(styles.header_row_col__4_col__offset_1, "col col--4 col--offset-1")}>
              <h1 className={styles.header_row_col__4_col__offset_1__title}>WALDO Documentation</h1>
              <p className={styles.header_row_col__4_col__offset_1__subtitle}>Welcome to the official WALDO documentation.</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--outline button--primary button--lg', styles.header_row_col__4_col__offset_1__getStarted,)}
                  href='./docs'>
                    Get Started                  
                </Link>
              </div>
            </div>
            <div className={clsx(styles.header_row_col__6_col__offset_1, "col col--6 col--offset-1")}>
              <img className={styles.header_row_col__6_col__offset_1__img} src='img/spin.gif' alt='Programmer' />
            </div>
          </div>
        </div>
      </header>
    </main>
    </Layout>
  );
}
