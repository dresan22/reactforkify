import React from 'react';
import '../../sass/main.scss';
import logo from '../../img/logo.png';
import Searchbox from './Searchbox';
import Navbar from './Navbar';

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
