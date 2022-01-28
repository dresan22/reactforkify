import React from 'react';

import Skeleton from '@mui/material/Skeleton';

function ModalSkeleton(props) {
  return (
    <figure className='recipe__fig'>
      <Skeleton
        variant='rectangular'
        sx={{ width: '100%', height: '100%' }}
        animation='wave'
        className='recipe__img'
      />

      <h1 className='recipe__title'>
        <Skeleton sx={{ width: '100%' }}></Skeleton>
      </h1>
    </figure>
  );
}

export default ModalSkeleton;
