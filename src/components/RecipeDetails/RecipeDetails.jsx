import React, { useState, useEffect } from 'react';
import useRecipe from '../../store/Context';
import icons from '../../assets/img/icons.svg';

function RecipeDetails() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const {
    bookmarks,
    addBookmark,
    removeBookmark,
    recipe,
    savedBookmarks,
    setSavedBookmarks,
    setBookmarks,
  } = useRecipe();

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
    setBookmarks();
  }, []);

  useEffect(() => {
    console.log('rendering');

    if (bookmarks.length !== 0) setSavedBookmarks(bookmarks);

    const isBookmarked = bookmarks.find((recipe) => {
      return recipe.title === title;
    });

    if (isBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarks, title, setSavedBookmarks, setBookmarks]);

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
  return (
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
  );
}

export default RecipeDetails;
