import React, { useState, useEffect } from 'react';

import classes from './Rate.module.scss';
import fullStar from '../../assets/icons/fullStar.svg';
import outlineStar from '../../assets/icons/outlineStar.svg';

const Rate = (host) => {
  const [outlineStarNumber, setOutlineStarNumber] = useState();
  const maxRating = 5;

  useEffect(() => {
    +host.rating < maxRating && setOutlineStarNumber(maxRating - +host.rating);
  }, []);

  return (
    <div className={classes.rate}>
      {[...Array(+host.rating)].map((e, index) => {
        return <img key={index} src={fullStar} alt="rate" />;
      })}
      {outlineStarNumber &&
        [...Array(outlineStarNumber)].map((e, index) => {
          return <img key={index} src={outlineStar} alt="rate" />;
        })}
    </div>
  );
};

export default Rate;
