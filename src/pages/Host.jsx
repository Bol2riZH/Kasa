import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../api/hosts.json';
import Carousel from '../components/UI/Carousel';
import Tag from '../components/UI/Tag';
import Rate from '../components/UI/Rate';

import classes from './Host.module.scss';

const Host = () => {
  const params = useParams();
  const host = data.find((host) => host.id === params.id);

  return (
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
        <div className={classes.bottomContainer}>
          <Rate {...host} />
          <div className={classes.hostInfo}>
            <p>{host.host.name}</p>
            <img src={host.host.picture} alt="host person" />
          </div>
        </div>
      </header>
      <section>
        <p>{host.description}</p>
        <ul>
          {host.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Host;
