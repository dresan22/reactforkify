import React from 'react';
import icons from '../../assets/img/icons.svg';
import useRecipe from '../../store/Context';

function Bookmarks() {
  const { bookmarks, setRecipe } = useRecipe();
  function handleBookmarkClick() {
    setRecipe(this);
  }

  return (
    <div className='bookmarks'>
      <ul className='bookmarks__list'>
        {bookmarks.map((recipe, i) => {
          return (
            <li
              key={i}
              className='preview'
              onClick={handleBookmarkClick.bind(recipe)}
            >
              <a className='preview__link' href='#23456'>
                <figure className='preview__fig'>
                  <img src={recipe.image_url} alt='Test' />
                </figure>
                <div className='preview__data'>
                  <h4 className='preview__title'>{recipe.title}</h4>
                  <p className='preview__publisher'>{recipe.publisher}</p>
                </div>
              </a>
            </li>
          );
        })}
        {bookmarks.length === 0 ? (
          <div className='message'>
            <div>
              <svg>
                <use href={icons + '#icon-smile'}></use>
              </svg>
            </div>
            <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
          </div>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}

export default Bookmarks;
