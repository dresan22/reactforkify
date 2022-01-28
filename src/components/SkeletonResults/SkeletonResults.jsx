import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import CardHeader from '@mui/material/CardHeader';

import useRecipe from '../../store/Context';
import './skeleton.styles.scss';

function SkeletonResults(props) {
  return (
    <CardHeader
      sx={{
        marginLeft: '15px',
        marginTop: '8px',
      }}
      avatar={
        <Skeleton animation='wave' variant='circular' width={48} height={48} />
      }
      title={
        <Skeleton
          animation='wave'
          height={10}
          width='80%'
          style={{ marginBottom: 6 }}
        />
      }
      subheader={<Skeleton animation='wave' height={10} width='40%' />}
    />
  );
}

export default SkeletonResults;
