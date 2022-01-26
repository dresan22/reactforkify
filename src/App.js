import React from 'react';
import './sass/main.scss';
import { RecipeProvider } from './Helper/Context';

import Header from './components/Header/Header';
import Container from './components/Container/Container';

// export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
// export const KEY = '7778fde8-8744-421f-8e6b-8edd7533308d';

function App() {
  return (
    <RecipeProvider>
      <div className='container'>
        <Header />
        <Container />
      </div>
    </RecipeProvider>
  );
}

export default App;
