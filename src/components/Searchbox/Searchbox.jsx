import React, { useRef } from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';

function Searchbox() {
  const { setQuery, setLoading, query } = useRecipe();
  const queryString = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query === queryString.current.value) return;

    setQuery(queryString.current.value);
    setLoading(true);

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
          required
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
