import React from 'react';
import useRecipe from '../../store/Context';
import icons from '../../assets/img/icons.svg';
function RecipeDirections() {
  const { recipe } = useRecipe();
  const { publisher, source_url } = recipe;

  return (
    <div className='recipe__directions'>
      <h2 className='heading--2'>How to cook it</h2>
      <p className='recipe__directions-text'>
        This recipe was carefully designed and tested by
        <span className='recipe__publisher'> {publisher}</span>. Please check
        out directions at their website.
      </p>
      <a className='btn--small recipe__btn' href={source_url} target='blank'>
        <span>Directions</span>
        <svg className='search__icon'>
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </a>
    </div>
  );
}

export default RecipeDirections;
