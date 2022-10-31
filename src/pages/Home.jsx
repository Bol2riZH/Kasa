import React from 'react';

import data from '../api/hosts.json';

import classes from './Home.module.scss';
import HostCard from '../components/UI/HostCard';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className={classes.content}>
      <div>
        <Header />
        <section className={classes.main}>
          <div className={classes.img}>
            <p>Chez vous, partout et ailleurs</p>
          </div>
          <ul className={classes.cardLayout}>
            {data.map((host) => (
              <li key={host.id}>
                <HostCard {...host} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
