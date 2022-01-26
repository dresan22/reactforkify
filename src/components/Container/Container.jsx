import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import { INIT_URL, API_URL, ERROR_MESSAGE } from '../../utils/constants';
import useRecipe from '../../store/Context';

function Container() {
  const { query, setRecipe, url } = useRecipe();
  const queryURL = `${API_URL}?search=${query}`;

  const [recipeResults, setRecipeResults] = useState([]);
  const [error, setError] = useState(false);
  //TODO: Investigate about react-hook-forms
  //TODO: Install React Material UI
  //TODO: Implement Skeleton
  //TODO: Create Portal to show the Modal
  //TODO: Implement Toast/Alert for error and success
  //TODO: Create a state for the loading logic and toasts
  //FIXME: Refactor useEffect logic in different functions
  //TODO: Refactor components abstraction

  useEffect(() => {
    console.log('rendering');

    const fetchData = async () => {
      try {
        const {
          data: {
            data: { recipe = undefined },
            status,
          },
        } = await axios(url || INIT_URL);

        if (status !== 'success') {
          setError('error');
          return;
        }

        if(recipe) setRecipe(recipe);

        const {
          data: {
            data: { recipes },
          },
        } = await axios(queryURL);

        setRecipeResults(
          recipes.map((el) => {
            return el;
          })
        );

      } catch (err) {
        console.warn(err);
        setError(true);
      }
    };

    fetchData();
  }, [setRecipe, queryURL, url]);

  //TODO: mejorar error handling
  return (
    <div className='separator'>
      <SearchResults props={recipeResults} />
      {error ? ERROR_MESSAGE : <Recipe />}
    </div>
  );
}

export default Container;
