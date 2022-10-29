import React from 'react';

import fullStart from '../../assets/icons/fullStart.svg';
import outlineStart from '../../assets/icons/outlineStart.svg';

const Rate = (host) => {
  return (
    <div>
      <span>{host.rating}</span>
    </div>
  );
};

export default Rate;
