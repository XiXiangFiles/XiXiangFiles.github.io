import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tech Note',
    link: "/docs/intro",
    img: "img/document.png",
    description: (
      <>
        Tech-Notes comprises my learning notes on various tech subjects.
        <br />
        It may contain personal notes or a summary of key concepts that are
        available in other documentation.
      </>
    ),
  },
  {
    title: "GitHub Project",
    link: "https://github.com/XiXiangFiles",
    img: "img/project.png",
    description: (
      <>
        This is my github,
        <br />
        If you liked my articles, you can{" "}
        <a href="https://github.com/XiXiangFiles">
          Star
        </a> or{" "}
        <a href="https://github.com/XiXiangFiles">
          Watch
        </a>{" "}
        the project.
      </>
    ),
  },
];

function Feature({title, link, img: img, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a  href={link}>
          <img  src={img} alt={title} height="100px" role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
