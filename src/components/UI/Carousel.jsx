import React, { useState } from 'react';

import classes from './Carousel.module.scss';

const Carousel = (host) => {
  const [picture, setPicture] = useState(0);

  const sliderRight = () => {
    picture === host.pictures.length - 1
      ? setPicture(0)
      : setPicture((prevState) => prevState + 1);
  };

  const sliderLeft = () => {
    picture === 0
      ? setPicture(host.pictures.length - 1)
      : setPicture((prevState) => prevState - 1);
  };

  return (
    <div className={classes.carousel}>
      <button onClick={sliderLeft}>Précédente</button>
      <li className={classes.img}>
        <img src={host.pictures[picture]} alt="host" />
      </li>
      <button onClick={sliderRight}>Suivante</button>
    </div>
  );
};

export default Carousel;
