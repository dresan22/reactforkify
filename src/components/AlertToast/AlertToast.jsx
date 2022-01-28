import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function AlertToast(props) {
  return (
    <div className=''>
      <Alert
        severity='error'
        sx={{
          margin: '15px',
          padding: '30px',
          fontSize: '18px',
        }}
        variant='outlined'
      >
        No recipes with that name. - <strong>Try again!</strong>
      </Alert>
    </div>
  );
}

export default AlertToast;
