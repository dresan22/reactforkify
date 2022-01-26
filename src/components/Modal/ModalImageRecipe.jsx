import React from 'react';
import ModalImage from 'react-modal-image';
import useRecipe from '../../store/Context';

function ModalImageRecipe() {
  const { recipe } = useRecipe();

  const { image_url, title } = recipe;

  return (
    <>
        <div className='recipe__fig'>
            <ModalImage
                className='recipe__fig'
                small={image_url}
                large={image_url}
            />
            <h1 className='recipe__title'>
                <span>{title}</span>
            </h1>
        </div>
    </>
  );
}

export default ModalImageRecipe;
