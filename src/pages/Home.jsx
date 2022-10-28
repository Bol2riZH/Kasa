import React from 'react';

import data from '../api/hosts.json';

import classes from './Home.module.scss';
import HostCard from '../components/Host/HostCard';

const Home = () => {
  return (
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
  );
};

export default Home;
