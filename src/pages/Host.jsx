import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../api/hosts.json';
import Carousel from '../components/UI/Carousel';

const Host = () => {
  const params = useParams();
  const host = data.find((host) => host.id === params.id);

  return (
    <div>
      <ul>
        <Carousel {...host} />
      </ul>
      <h2>{host.title}</h2>
    </div>
  );
};

export default Host;
