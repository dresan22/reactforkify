import React from 'react';
import Skeleton from '@mui/material/Skeleton';

function RecipeSkeletonIngredients() {
  const arraySkeleton = [1, 2, 3, 4, 5];

  return (
    <div className='recipe__ingredients'>
      <Skeleton
        sx={{ marginBottom: '15px' }}
        width={200}
        className='heading--2'
      ></Skeleton>
      <ul className='recipe__ingredient-list'>
        {arraySkeleton.map((ing, i) => {
          return (
            <li className='recipe__ingredient' key={i}>
              <Skeleton width={200} className='recipe__quantity'></Skeleton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeSkeletonIngredients;
