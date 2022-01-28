import React from 'react';
import IngredientsSkeleton from './IngredientsSkeleton';
import DetailsSkeleton from './DetailsSkeleton';
import ModalSkeleton from './ModalSkeleton';
import DirectionsSkeleton from './DirectionsSkeleton';

function RecipeSkeleton() {
  return (
    <div className='recipe'>
      <ModalSkeleton />
      <DetailsSkeleton />
      <IngredientsSkeleton />
      <DirectionsSkeleton />
    </div>
  );
}

export default RecipeSkeleton;
