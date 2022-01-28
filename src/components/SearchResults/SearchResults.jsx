import React from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';
import SkeletonResults from '../SkeletonResults/SkeletonResults';

function SearchResults({ props }) {
  const { handleResults, loading } = useRecipe();

  //TODO: entender por que no funciona el bind

  function handleClick() {
    handleResults(this);
  }

  return (
    <div className='search-results'>
      <ul className='results'>
        {(loading ? Array.from(new Array(6)) : props).map((recipe, i) =>
          !recipe ? (
            <SkeletonResults key={i} />
          ) : (
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
          )
        )}
      </ul>
    </div>
  );
}

export default SearchResults;
