import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import { INIT_URL, API_URL, ERROR_MESSAGE } from '../../Helper/config';
import useRecipe from '../../Helper/Context';

function Container() {
  const { query, setRecipe, url } = useRecipe();
  const queryURL = `${API_URL}?search=${query}`;

  const [recipeResults, setRecipeResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('rendering');

    const fetchData = async () => {
      try {
        const {
          data: {
            data: { recipe },
            status,
          },
        } = await axios(url || INIT_URL);
        setRecipe(recipe);

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
        if (status !== 'success') {
          setError('error');
          return;
        }
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
