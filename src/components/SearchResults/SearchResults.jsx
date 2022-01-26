import React from 'react';
import icons from '../../img/icons.svg';
import useRecipe from '../../Helper/Context';

function SearchResults({ props }) {
  const { handleResults } = useRecipe();

  //TODO: entender por que no funciona el bind

  function handleClick() {
    handleResults(this);
  }

  return (
    <div className='search-results'>
      <ul className='results'>
        {props.map((recipe) => {
          return (
            <li
              className='preview'
              key={recipe.id}
              onClick={handleClick.bind(recipe)}
            >
              <a className='preview__link preview__link--active' href='#0'>
                <figure className='preview__fig'>
                  <img src={recipe.image_url} alt='Test' />
                </figure>
                <div className='preview__data'>
                  <h4 className='preview__title'>{recipe.title}</h4>
                  <p className='preview__publisher'>{recipe.publisher}</p>
                  <div className='preview__user-generated'>
                    <svg>
                      <use href={icons + '#icon-user'}></use>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
