import React from 'react';
import Skeleton from '@mui/material/Skeleton';

function DirectionsSkeleton(props) {
  return (
    <div className='recipe__directions'>
      <Skeleton
        sx={{ width: '50%', marginBottom: '30px' }}
        className='heading--2'
      ></Skeleton>
      <Skeleton
        sx={{ width: '100%', marginBottom: '30px' }}
        className='recipe__directions-text'
      ></Skeleton>
      <Skeleton className='btn--small recipe__btn' target='blank'>
        <span>Directions</span>
        <svg className='search__icon'>
          <use href='#icon-arrow-right'></use>
        </svg>
      </Skeleton>
    </div>
  );
}

export default DirectionsSkeleton;
