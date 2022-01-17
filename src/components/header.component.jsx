import React from 'react';
import '../sass/main.scss';
import logo from '../img/logo.png';
import Searchbox from './searchbox';
import Navbar from './navbar';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <Searchbox />
      <Navbar />
    </header>
  );
};

export default Header;
