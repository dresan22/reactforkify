import React from 'react';
// import testIMG from './../img/testrecipe.jpeg';
import Pagination from './pagination';

const SearchResults = ({ props }) => {
  const { title, publisher, image_url } = props;
  // console.log(title);

  return (
    <div className='search-results'>
      <ul className='results'>
        <li className='preview'>
          <a className='preview__link preview__link--active' href='#23456'>
            <figure className='preview__fig'>
              <img src={image_url} alt='Test' />
            </figure>
            <div className='preview__data'>
              <h4 className='preview__title'>{title}</h4>
              <p className='preview__publisher'>{publisher}</p>
              <div className='preview__user-generated'>
                <svg>
                  <use href='src/img/icons.svg#icon-user'></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <Pagination />
      <p className='copyright'>
        &copy; Copyright by no one. Use for learning or your portfolio. Don't
        use to teach. Don't claim as your own.
      </p>
    </div>
  );
};

export default SearchResults;
