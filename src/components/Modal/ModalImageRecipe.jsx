import React, { useState } from 'react';
import useRecipe from '../../store/Context';
import { styled, Box } from '@mui/system';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 240,
};

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: blur(3px);
`;

function ModalImageRecipe() {
  const { recipe } = useRecipe();
  const { image_url, title } = recipe;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <figure className='recipe__fig'>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <img className='recipe__img' src={image_url} alt={title} />
        </Box>
      </Modal>
      <img className='recipe__img' src={image_url} alt={title} />
      <h1 className='recipe__title' onClick={handleOpen}>
        <span>{title}</span>
      </h1>
    </figure>
  );
}

export default ModalImageRecipe;
