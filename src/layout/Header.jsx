import React from 'react';

import classes from './Header.module.scss';
import logo from '../assets/logo/logo.svg';

import Navigation from '../components/Navigation/Navigation';

const Header = () => {
  return (
    <header className={classes.layout}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
