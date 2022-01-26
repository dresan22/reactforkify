import React, { useRef } from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';

function Searchbox() {
  const { setQuery } = useRecipe();
  const queryString = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(queryString.current.value);
    queryString.current.value = '';
  };
  //TODO: por que onClick y no onSubmit?
  return (
    <div>
      <form className='search' onSubmit={handleSearch}>
        <input
          ref={queryString}
          type='text'
          className='search__field'
          placeholder='Search over 1,000,000 recipes...'
        />
        <button className='btn search__btn'>
          <svg className='search__icon'>
            <use href={icons + '#icon-search'}></use>
          </svg>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default Searchbox;
