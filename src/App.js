import React from 'react';
import './sass/main.scss';
import { RecipeProvider } from './store/Context';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <RecipeProvider>
      <div className='container'>
        <Header />
        <Container />
      </div>
      <Footer />
    </RecipeProvider>
  );
}

export default App;
