import React from 'react';

import Ingredients from '../Ingredients/Ingredients';
import ModalImageRecipe from '../Modal/ModalImageRecipe';
import RecipeDetails from '../RecipeDetails.jsx/RecipeDetails';
import RecipeDirections from '../RecipeDirections/RecipeDirections';

function Recipe() {
  return (
    <div className='recipe'>
      <ModalImageRecipe />
      <RecipeDetails />
      <Ingredients />
      <RecipeDirections />
    </div>
  );
}
export default Recipe;
