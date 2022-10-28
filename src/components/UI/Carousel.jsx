import React, { useState } from 'react';

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
    <div>
      <button onClick={sliderRight}>Suivante</button>
      <img src={host.pictures[picture]} alt="host" />
      <button onClick={sliderLeft}>Précédente</button>
    </div>
  );
};

export default Carousel;
