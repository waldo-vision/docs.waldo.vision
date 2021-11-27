import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTeams.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Analysis',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Responsible for the core functionality of WALDO, including data cleaning, machine learning / AI, video analysis, cheating prediction, etc..
        <p style={{fontStyle:"italic",fontSize:"13px",fontWeight:"bold", textAlign:"left"}}>Team Leads: <mark>@FrostBite</mark> & <mark>@FaceInCake</mark> </p>
      </>
    ),
  },
  {
    title: 'FrontEnd',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Responsible for designing and developing the User Interface for WALDO. This team will be working on art assets, a GUI for a standalone WALDO application, and a Web-based interface for WALDO's future web deployment.
        <p style={{fontStyle:"italic",fontSize:"13px",fontWeight:"bold", textAlign:"left"}}>Team Lead: <mark>@tsundere</mark></p>
        <span className="text--center" style={{fontStyle:"italic",fontSize:"13px",fontWeight:"lighter",textAlign:"center"}}>(individual project leads could emerge for specific features)</span>

      </>
    ),
  },
  {
    title: 'Infrastructure',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Responsible for devops, deployment, and integration. Basically, the infrastructure team's goal is creating an efficient work process for our development teams, tying the frontend to the backend, and eventually, web deployment. 
        <p style={{fontStyle:"italic",fontSize:"13px",fontWeight:"bold", textAlign:"left"}}>Team Lead: <mark>@Keeks</mark></p>
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to="./docs">
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
