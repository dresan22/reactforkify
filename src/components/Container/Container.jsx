import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import SearchResults from '../SearchResults/SearchResults';
import { QueryContext } from '../../Helper/Context';
import { INIT_URL, API_URL, RECIPE_STATE_EMPTY } from '../../Helper/config';

function Container() {
  const { query } = useContext(QueryContext);
  const queryURL = `${API_URL}?search=${query}`;

  const [url, setUrl] = useState('');
  const [recipeResults, setRecipeResults] = useState([]);
  const [recipe, setRecipe] = useState(RECIPE_STATE_EMPTY);

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
        console.log('aslkdfjlasjdflkjsl');
        if (status !== 'success') {
          // setError('error');
          return;
        }
      } catch (error) {
        console.log('error');
      }
    };

    fetchData();
  }, [url, queryURL]);

  function handleResults(newRecipe) {
    setUrl(`https://forkify-api.herokuapp.com/api/v2/recipes/${newRecipe.id}/`);
  }

  return (
    <div className='separator'>
      <SearchResults props={recipeResults} recipeChange={handleResults} />
      <Recipe props={recipe} />
    </div>
  );
}

export default Container;
