import React, { useState } from 'react';

import classes from './CollapseCard.module.scss';
import arrow from '../../assets/icons/arrow_back_ios-24px 2.svg';

const CollapseCard = (host) => {
  const [collapse, setCollapse] = useState(true);

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  return (
    <div className={classes.container}>
      {host.children.constructor === Array ? (
        <>
          <div className={classes.topContainer} onClick={collapseHandler}>
            <h2>Équipements</h2>
            <img
              className={collapse && classes.rotate}
              src={arrow}
              alt="arrow"
            />
          </div>
          <ul className={collapse ? classes.hidden : classes.collapse}>
            {host.children.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className={classes.topContainer} onClick={collapseHandler}>
            <h2>Description</h2>
            <img
              className={collapse && classes.rotate}
              src={arrow}
              alt="arrow"
            />
          </div>
          <p className={collapse ? classes.hidden : classes.collapse}>
            {host.children}
          </p>
        </>
      )}
    </div>
  );
};

export default CollapseCard;
