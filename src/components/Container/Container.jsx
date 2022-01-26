import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import { RecipeContext } from '../../Helper/Context';
import {
  INIT_URL,
  API_URL,
  RECIPE_STATE_EMPTY,
  ERROR_MESSAGE,
} from '../../Helper/config';
import useRecipe from '../../Helper/Context';

function Container() {
  const { bookmarks } = useRecipe();
  const { query, recipe, setRecipe } = useContext(RecipeContext);
  const queryURL = `${API_URL}?search=${query}`;

  const [url, setUrl] = useState('');
  const [recipeResults, setRecipeResults] = useState([]);
  // const [recipe, setRecipe] = useState(RECIPE_STATE_EMPTY);
  const [error, sestError] = useState(false);

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
          // setError('error');
          return;
        }
      } catch (err) {
        console.warn(err);
        sestError(true);
      }
    };

    fetchData();
  }, [url, queryURL]);

  function handleResults(newRecipe) {
    setUrl(`https://forkify-api.herokuapp.com/api/v2/recipes/${newRecipe.id}/`);
  }
  //TODO: mejorar error handling
  return (
    <div className='separator'>
      <SearchResults props={recipeResults} recipeChange={handleResults} />
      {error ? ERROR_MESSAGE : <Recipe props={recipe} />}
    </div>
  );
}

export default Container;
