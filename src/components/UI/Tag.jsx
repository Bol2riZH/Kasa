import React from 'react';

import classes from './Tag.module.scss';

const tag = (host) => {
  return (
    <ul className={classes.tag}>
      {host.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default tag;
