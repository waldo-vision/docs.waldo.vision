import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageTeams from '../components/HomepageTeams';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>  
        <Link
            className="button button--secondary button--lg"
            to="./docs" style={{margin:"1rem"}}>
            Documentation 📘
        </Link>
        <Link
            className="button button--lg"
            to="./blog" style={{margin:"1rem"}}>
            Changelogs & FAQs 📝    
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="WALDO Vision's Documentation Website | World's first visual anti-cheat powered by AI">
      <HomepageHeader />
      <main>
        <HomepageTeams />
      </main>
    </Layout>
  );
}
