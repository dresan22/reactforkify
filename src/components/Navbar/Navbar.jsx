import React from 'react';
import icons from '../../assets/img/icons.svg';

import Bookmarks from '../Bookmarks/Bookmarks';

function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <button className='nav__btn nav__btn--bookmarks'>
            <svg className='nav__icon'>
              <use href={icons + '#icon-bookmark'}></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <Bookmarks />;
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
