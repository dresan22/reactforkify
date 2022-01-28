import React from 'react';
import './sass/main.scss';
import { RecipeProvider } from './store/Context';

import Header from './components/Header/Header';
import Container from './components/Container/Container';

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
