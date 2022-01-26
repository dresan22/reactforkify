import React, { useContext, useRef } from 'react';
import icons from '../../img/icons.svg';
import { RecipeContext } from '../../Helper/Context';

function Searchbox() {
  const { setQuery } = useContext(RecipeContext);
  const queryString = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(queryString.current.value);
    queryString.current.value = '';
  };
  //TODO: por que onClick y no onSubmit?
  return (
    <div>
      <form className='search'>
        <input
          ref={queryString}
          type='text'
          className='search__field'
          placeholder='Search over 1,000,000 recipes...'
        />
        <button className='btn search__btn' onClick={handleSearch}>
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
