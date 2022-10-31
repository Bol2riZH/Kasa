import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <ul className={classes.layout}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <li>ACCUEIL</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <li>A PROPOS</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
