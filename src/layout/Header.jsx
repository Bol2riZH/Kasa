import React from 'react';

import Navigation from '../components/Navigation';
import logo from '../assets/logo/logo.svg';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
