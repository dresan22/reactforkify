import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import { INIT_URL, API_URL } from '../../utils/constants';
import useRecipe from '../../store/Context';

import AlertToast from '../AlertToast/AlertToast';

function Container() {
  const { query, setRecipe, url, setLoading } = useRecipe();
  const queryURL = `${API_URL}?search=${query}`;

  const [recipeResults, setRecipeResults] = useState([]);
  const [error, setError] = useState(false);
  const [errorResults, setErrorResults] = useState(false);
  //TODO: Investigate about react-hook-forms
  //TODO: Implement Skeleton
  //TODO: Create Portal to show the Modal
  //TODO: Implement Toast/Alert for error and success
  //TODO: Create a state for the loading logic and toasts
  //FIXME: Refactor useEffect logic in different functions
  //TODO: Refactor components abstraction

  useEffect(() => {
    setLoading(true);

    setErrorResults(false);

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

        if (recipe) setRecipe(recipe);

        const {
          data: {
            data: { recipes },

            results,
          },
        } = await axios(queryURL);

        if (results === 0) {
          setErrorResults(true);
          return;
        }

        if (recipes)
          setRecipeResults(
            recipes.map((el) => {
              return el;
            })
          );
      } catch (err) {
        console.warn(err);
        setErrorResults(true);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [setRecipe, queryURL, url, setRecipeResults, setLoading]);

  //TODO: mejorar error handling
  return (
    <div className='separator'>
      {errorResults ? <AlertToast /> : <SearchResults props={recipeResults} />}

      {error ? <AlertToast /> : <Recipe />}
    </div>
  );
}

export default Container;
