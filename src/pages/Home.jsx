import React from 'react';

import data from '../api/hosts.json';

import classes from './Home.module.scss';

import Host from '../components/Host/Host';

const Home = () => {
  return (
    <section className={classes.main}>
      <div className={classes.img}>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <ul className={classes.cardLayout}>
        {data.map((host) => (
          <li key={host.id}>
            <Host {...host} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
