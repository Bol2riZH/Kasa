import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../api/hosts.json';
import Carousel from '../components/UI/Carousel';

import classes from './Host.module.scss';

const Host = () => {
  const params = useParams();
  const host = data.find((host) => host.id === params.id);

  return (
    <div>
      <ul>
        <Carousel {...host} />
      </ul>
      <header className={classes.header}>
        <div>
          <h2>{host.title}</h2>
          <p>{host.location}</p>
          <ul>
            {host.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>{host.host.name}</p>
          <img src={host.host.picture} alt="host person" />
          <span>{host.rating}</span>
        </div>
      </header>
      <div>
        <p>{host.description}</p>
        <ul>
          {host.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Host;
