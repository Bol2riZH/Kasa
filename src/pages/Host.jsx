import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../api/hosts.json';

import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Rate from '../components/Rate';
import CollapseCard from '../components/CollapseCard';

import classes from './Host.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Host = () => {
  const params = useParams();
  const host = data.find((host) => host.id === params.id);

  return (
    <div className={classes.content}>
      <div className={classes.contentCenter}>
        <Header />
        <section className={classes.main}>
          <ul>
            <Carousel {...host} />
          </ul>
          <header className={classes.header}>
            <div className={classes.topContainer}>
              <h2>{host.title}</h2>
              <p>{host.location}</p>
              <Tag {...host} />
            </div>
            <div className={classes.middleContainer}>
              <Rate {...host} />
              <div className={classes.hostInfo}>
                <span>{host.host.name}</span>
                <img src={host.host.picture} alt="host person" />
              </div>
            </div>
          </header>
          <section className={classes.bottomContainer}>
            <CollapseCard>{host.description}</CollapseCard>
            <CollapseCard>{host.equipments}</CollapseCard>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Host;
