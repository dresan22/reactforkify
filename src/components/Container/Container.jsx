import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import SkeletonResults from '../SkeletonResults/SkeletonResults';
import { INIT_URL, API_URL, ERROR_MESSAGE } from '../../utils/constants';
import useRecipe from '../../store/Context';
import { Skeleton } from '@mui/material';
import AlertToast from '../AlertToast/AlertToast';

function Container() {
  const { query, setRecipe, url, loading, setLoading } = useRecipe();
  const queryURL = `${API_URL}?search=${query}`;

  const [recipeResults, setRecipeResults] = useState([]);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  //TODO: Investigate about react-hook-forms
  //TODO: Implement Skeleton
  //TODO: Create Portal to show the Modal
  //TODO: Implement Toast/Alert for error and success
  //TODO: Create a state for the loading logic and toasts
  //FIXME: Refactor useEffect logic in different functions
  //TODO: Refactor components abstraction

  useEffect(() => {
    setLoading(true);
    setError2(false);

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
          setError2(true);
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

        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [setRecipe, queryURL, url, setRecipeResults, setLoading]);

  //TODO: mejorar error handling
  return (
    <div className='separator'>
      {error2 ? <AlertToast /> : <SearchResults props={recipeResults} />}

      {error ? ERROR_MESSAGE : <Recipe />}
    </div>
  );
}

export default Container;
