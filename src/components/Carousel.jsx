import React, { useState } from 'react';

import classes from './Carousel.module.scss';
import arrow from '../assets/icons/arrow_back_ios-24px 2.svg';

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
      <div
        className={`${classes.arrows} ${
          host.pictures.length <= 1 && classes.hidden
        }`}
      >
        <img
          src={arrow}
          alt="left arrow"
          onClick={sliderLeft}
          className={classes.leftArrow}
        />
        <img
          src={arrow}
          alt="right arrow"
          onClick={sliderRight}
          className={classes.rightArrow}
        />
      </div>
      <li className={classes.img}>
        <img src={host.pictures[picture]} alt="host" />
      </li>
      <span className={classes.hidden}>{`${picture + 1}/${
        host.pictures.length
      }`}</span>
    </div>
  );
};

export default Carousel;
