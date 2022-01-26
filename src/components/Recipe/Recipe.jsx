import React, { useState, useEffect } from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';
import ModalImageRecipe from '../Modal/ModalImageRecipe'

function Recipe() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { bookmarks, addBookmark, removeBookmark, recipe } = useRecipe();
  const [openImg, setOpenImg] = useState(false);

  const {
    title,
    image_url,
    ingredients,
    publisher,
    servings,
    source_url,
    id,
    cooking_time,
  } = recipe;

  useEffect(() => {
    const isBookmarked = bookmarks.find((recipe) => {
      return recipe.title === title;
    });

    if (isBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarks, title]);

  const handleBookmarkClick = () => {
    const recipe = {
      title,
      image_url,
      ingredients,
      publisher,
      servings,
      source_url,
      id,
      cooking_time,
    };

    if (isBookmarked) {
      removeBookmark(recipe);
    } else {
      addBookmark(recipe);
    }
  };

  const ingr =
    ingredients &&
    ingredients.map((ing, i) => {
      return (
        <li className='recipe__ingredient' key={i}>
          <svg className='recipe__icon'>
            <use href={icons + '#icon-check'}></use>
          </svg>
          <div className='recipe__quantity'>{ing.quantity}</div>
          <div className='recipe__description'>
            <span className='recipe__unit'>{ing.unit} </span>
            {ing.description}
          </div>
        </li>
      );
    });

  const handleShow = () => {
    setOpenImg(!openImg);
    console.log('click', openImg);
  };

  return (
    <>
      <div className='recipe' key={id}>
        <ModalImageRecipe/>
        {/* <figure className='recipe__fig ' onClick={handleShow}>
        <img src={image_url} alt={title} className='recipe__img' />
        <h1 className='recipe__title'>
          <span>{title}</span>
        </h1>
      </figure> */}
        <div className='recipe__details'>
          <div className='recipe__info'>
            <svg className='recipe__info-icon'>
              <use href={icons + '#icon-clock'}></use>
            </svg>
            <span className='recipe__info-data recipe__info-data--minutes'>
              {cooking_time}
            </span>
            <span className='recipe__info-text'>minutes</span>
          </div>
          <div className='recipe__info'>
            <svg className='recipe__info-icon'>
              <use href={icons + '#icon-user'}></use>
            </svg>
            <span className='recipe__info-data recipe__info-data--people'>
              {servings}
            </span>
            <span className='recipe__info-text'>servings</span>

            <div className='recipe__info-buttons'>
              <button className='btn--tiny btn--increase-servings'>
                <svg>
                  <use href={icons + '#icon-minus-circle'}></use>
                </svg>
              </button>
              <button className='btn--tiny btn--increase-servings'>
                <svg>
                  <use href={icons + '#icon-plus-circle'}></use>
                </svg>
              </button>
            </div>
          </div>

          <div className='recipe__user-generated'>
            <svg>
              <use href={icons + '#icon-user'}></use>
            </svg>
          </div>
          <button className='btn--round' onClick={handleBookmarkClick}>
            <svg className=''>
              <use
                href={
                  !isBookmarked
                    ? icons + '#icon-bookmark'
                    : icons + '#icon-bookmark-fill'
                }
              ></use>
            </svg>
          </button>
        </div>
        <div className='recipe__ingredients'>
          <h2 className='heading--2'>Recipe ingredients</h2>

          <ul className='recipe__ingredient-list'>
            {ingr || 'There are no ingredients'}
          </ul>
        </div>
        <div className='recipe__directions'>
          <h2 className='heading--2'>How to cook it</h2>
          <p className='recipe__directions-text'>
            This recipe was carefully designed and tested by
            <span className='recipe__publisher'> {publisher}</span>. Please check
            out directions at their website.
          </p>
          <a className='btn--small recipe__btn' href={source_url} target='blank'>
            <span>Directions</span>
            <svg className='search__icon'>
              <use href={icons + '#icon-arrow-right'}></use>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
export default Recipe;
