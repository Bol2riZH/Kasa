import React from 'react';

import data from '../api/about.json';

import classes from './About.module.scss';
import bgAPropos from '../assets/images/bg-aPropos.jpg';
import bgAProposXl from '../assets/images/bg-aPropos-XL.jpg';

import useDocumentTitle from '../hook/useDocumentTitle';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CollapseCard from '../components/CollapseCard';

const About = ({ title }) => {
  useDocumentTitle(title);
  return (
    <div className={classes.content}>
      <div className={classes.contentCenter}>
        <Header />
        <section className={classes.main}>
          <div className={classes.img}>
            <picture>
              <source media="(min-width: 992px)" srcSet={bgAProposXl} />
              <img src={bgAPropos} alt="background" />
            </picture>
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
