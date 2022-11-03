import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './HostCard.module.scss';

const HostCard = (host) => {
  const navigate = useNavigate();

  const getHostId = () => {
    navigate(`/host/${host.id}`);
  };

  return (
    <div className={classes.card} onClick={getHostId}>
      <h2>{host.title}</h2>
      <img src={host.cover} alt="host place" />
    </div>
  );
};

export default HostCard;
