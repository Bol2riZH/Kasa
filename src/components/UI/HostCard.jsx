import React from 'react';

import classes from './HostCard.module.scss';
import { useNavigate } from 'react-router-dom';

const HostCard = (props) => {
  const navigate = useNavigate();

  const getHostId = () => {
    navigate(`/host/${props.id}`);
  };

  return (
    <div className={classes.card} onClick={getHostId}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default HostCard;
