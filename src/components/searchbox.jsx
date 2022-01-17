import React from 'react';

const Searchbox = () => {
  return (
    <div>
      <form className='search'>
        <input
          type='text'
          className='search__field'
          placeholder='Search over 1,000,000 recipes...'
        />
        <button className='btn search__btn'>
          <svg className='search__icon'>
            <use href='src/img/icons.svg#icon-search'></use>
          </svg>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Searchbox;
