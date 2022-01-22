import React, { useState } from 'react';
import { QueryContext } from './Helper/Context';

import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import { INIT_LIST_STRING } from './Helper/config';

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const KEY = '7778fde8-8744-421f-8e6b-8edd7533308d';

function App() {
  const [query, setQuery] = useState(INIT_LIST_STRING);
  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <div className='container'>
        <Header />
        <Container />
      </div>
    </QueryContext.Provider>
  );
}

export default App;
