import React from 'react';

import logo from '../../assets/img/logo.png';
import Searchbox from '../Searchbox/Searchbox';
import Navbar from './../Navbar/Navbar';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' href='#' />
      <Searchbox />
      <Navbar />
    </header>
  );
}

export default Header;
