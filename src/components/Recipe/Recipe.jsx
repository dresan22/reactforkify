import React, { useState } from 'react';

import Ingredients from '../Ingredients/Ingredients';
import ModalImageRecipe from '../Modal/ModalImageRecipe';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeDirections from '../RecipeDirections/RecipeDirections';
import RecipeSkeleton from '../RecipeSkeleton/RecipeSkeleton';
import useRecipe from '../../store/Context';

function Recipe() {
  const { recipeLoading } = useRecipe();
  return (
    <>
      {recipeLoading ? (
        <RecipeSkeleton />
      ) : (
        <div className='recipe'>
          <ModalImageRecipe />
          <RecipeDetails />
          <Ingredients />
          <RecipeDirections />
        </div>
      )}
    </>
  );
}
export default Recipe;
