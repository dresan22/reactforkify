import React from 'react';
import testimg from './../img/testrecipe.jpeg';

const Recipe = ({ props }) => {
  // console.log(props);
  const { title, publisher, cooking_time, servings, image_url } = props;

  return (
    <div className='recipe'>
      <figure className='recipe__fig'>
        <img src={image_url} alt='Tomato' className='recipe__img' />
        <h1 className='recipe__title'>
          <span>{title}</span>
        </h1>
      </figure>
      <div className='recipe__details'>
        <div className='recipe__info'>
          <svg className='recipe__info-icon'>
            <use href='src/img/icons.svg#icon-clock'></use>
          </svg>
          <span className='recipe__info-data recipe__info-data--minutes'>
            {cooking_time}
          </span>
          <span className='recipe__info-text'>minutes</span>
        </div>
        <div className='recipe__info'>
          <svg className='recipe__info-icon'>
            <use href='src/img/icons.svg#icon-users'></use>
          </svg>
          <span className='recipe__info-data recipe__info-data--people'>
            {servings}
          </span>
          <span className='recipe__info-text'>servings</span>

          <div className='recipe__info-buttons'>
            <button className='btn--tiny btn--increase-servings'>
              <svg>
                <use href='src/img/icons.svg#icon-minus-circle'></use>
              </svg>
            </button>
            <button className='btn--tiny btn--increase-servings'>
              <svg>
                <use href='src/img/icons.svg#icon-plus-circle'></use>
              </svg>
            </button>
          </div>
        </div>

        <div className='recipe__user-generated'>
          <svg>
            <use href='src/img/icons.svg#icon-user'></use>
          </svg>
        </div>
        <button className='btn--round'>
          <svg className=''>
            <use href='src/img/icons.svg#icon-bookmark-fill'></use>
          </svg>
        </button>
      </div>
      <div className='recipe__ingredients'>
        <h2 className='heading--2'>Recipe ingredients</h2>
        <ul className='recipe__ingredient-list'>
          <li className='recipe__ingredient'>
            <svg className='recipe__icon'>
              <use href='src/img/icons.svg#icon-check'></use>
            </svg>
            <div className='recipe__quantity'>1000</div>
            <div className='recipe__description'>
              <span className='recipe__unit'>g</span>
              pasta
            </div>
          </li>

          <li className='recipe__ingredient'>
            <svg className='recipe__icon'>
              <use href='src/img/icons.svg#icon-check'></use>
            </svg>
            <div className='recipe__quantity'>0.5</div>
            <div className='recipe__description'>
              <span className='recipe__unit'>cup</span>
              ricotta cheese
            </div>
          </li>
        </ul>
      </div>
      <div className='recipe__directions'>
        <h2 className='heading--2'>How to cook it</h2>
        <p className='recipe__directions-text'>
          This recipe was carefully designed and tested by
          <span className='recipe__publisher'> {publisher}</span>. Please check
          out directions at their website.
        </p>
        <a
          className='btn--small recipe__btn'
          href='http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/'
        >
          <span>Directions</span>
          <svg className='search__icon'>
            <use href='src/img/icons.svg#icon-arrow-right'></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Recipe;