import React from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';

function Ingredients() {
  const { recipe } = useRecipe();

  return (
    <div className='recipe__ingredients'>
      <h2 className='heading--2'>Recipe ingredients</h2>
      <ul className='recipe__ingredient-list'>
        {recipe.ingredients.map((ing, i) => {
          return (
            <li className='recipe__ingredient' key={i}>
              <svg className='recipe__icon'>
                <use href={icons + '#icon-check'}></use>
              </svg>
              <div className='recipe__quantity'>{ing.quantity}</div>
              <div className='recipe__description'>
                <span className='recipe__unit'>{ing.unit} </span>
                {ing.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ingredients;
