import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Header.css'


class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <NavLink activeClassName={classes.active} to="/" exact>Home</NavLink>
        <NavLink activeClassName={classes.active} to="/mycart">My cart</NavLink>
      </header>
    );
  }
}

export default Header;