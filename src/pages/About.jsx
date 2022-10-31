import React from 'react';

import data from '../api/about.json';
import CollapseCard from '../components/CollapseCard';

import classes from './About.module.scss';
import bgAPropos from '../assets/images/bg-aPropos.jpg';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <div className={classes.content}>
      <div className={classes.contentCenter}>
        <Header />
        <section className={classes.main}>
          <div className={classes.img}>
            <img src={bgAPropos} alt="background" />
          </div>
          <div className={classes.container}>
            <CollapseCard {...data.trust} />
            <CollapseCard {...data.respect} />
            <CollapseCard {...data.service} />
            <CollapseCard {...data.security} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
