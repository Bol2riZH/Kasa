import React from 'react';

import data from '../api/hosts.json';

import classes from './Home.module.scss';

import Host from '../components/Host/Host';

const hostHandler = (e) => {
  console.log(e.target.value);
};

const Home = () => {
  return (
    <div>
      <ul className={classes.layout}>
        {data.map((host) => (
          <li key={host.id}>
            <Host {...host} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
