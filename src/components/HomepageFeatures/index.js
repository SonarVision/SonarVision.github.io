import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ultra Précis',
    Svg: require('@site/static/img/undraw_living.svg').default,
    description: (
      <>
        Notre géolocalisation VPS (Visual Positionning System) permet de vous donner des instructions avec une précision inférieure au mètre.
      </>
    ),
  },
  {
    title: 'Accessibilité avant tout',
    Svg: require('@site/static/img/undraw_map_dark.svg').default,
    description: (
      <>
        L'application iOS SonarVision a été conçue pour être entièrement accessible via VoiceOver, le lecteur d'écran natif d'Apple.
      </>
    ),
  },
  {
    title: 'Une expérience humaine',
    Svg: require('@site/static/img/undraw_pedestrian_crossing.svg').default,
    description: (
      <>
        Les opérateurs de SonarVision veillent à ce que vos trajets soient agréables et sécurisés. Exigez des trajets
          qui correspondent à vos besoins.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
