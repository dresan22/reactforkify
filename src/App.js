import './App.css';
import Header from './components/header.component';
import Recipe from './components/recipe';
import SearchResults from './components/search-results';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = '7778fde8-8744-421f-8e6b-8edd7533308d';
export const MODAL_CLOSE_SEC = 2.5;

const url =
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=7778fde8-8744-421f-8e6b-8edd7533308d';

const App = () => {
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      // console.log(result.data.data.recipe);
      setRecipe(result.data.data.recipe);
    };

    fetchData();
  }, []);

  // console.log(recipe);

  return (
    <div className='container'>
      <Header />
      <SearchResults props={recipe} />
      <Recipe props={recipe} />
    </div>
  );
};

export default App;
