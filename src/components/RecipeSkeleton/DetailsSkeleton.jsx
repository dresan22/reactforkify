import React from 'react';
import icons from '../../assets/img/icons.svg';
import Skeleton from '@mui/material/Skeleton';

function DetailsSkeleton(props) {
  return (
    <div className='recipe__details'>
      <div className='recipe__info'>
        <Skeleton
          variant='circular'
          width={20}
          height={20}
          sx={{ marginRight: '15px' }}
        />
        <Skeleton
          width={120}
          className='recipe__info-data recipe__info-data--minutes'
        ></Skeleton>
      </div>
      <div className='recipe__info'>
        <Skeleton
          variant='circular'
          width={20}
          height={20}
          sx={{ marginRight: '15px' }}
        />
        <Skeleton
          width={120}
          className='recipe__info-data recipe__info-data--people'
        ></Skeleton>

        <div className='recipe__info-buttons'>
          <Skeleton
            variant='circular'
            width={20}
            height={20}
            sx={{ marginRight: '15px' }}
          />
          <Skeleton
            variant='circular'
            width={20}
            height={20}
            sx={{ marginRight: '15px' }}
          />
        </div>
      </div>

      <div className='recipe__user-generated'></div>
      <Skeleton
        variant='circular'
        width={30}
        height={30}
        sx={{ marginRight: '15px' }}
      />
    </div>
  );
}

export default DetailsSkeleton;
