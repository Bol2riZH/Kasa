import React from 'react';

import classes from './Footer.module.scss';
import logo from '../assets/logo/logo-white.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
