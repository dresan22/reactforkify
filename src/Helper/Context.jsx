import { createContext, useReducer, useContext, useState } from 'react';
import recipeReducer, { initialState } from './reducer';
import { RECIPE_STATE_EMPTY } from './config';

import { INIT_LIST_STRING } from './config';

export const RecipeContext = createContext({ initialState });

export const RecipeProvider = ({ children }) => {
  const [query, setQuery] = useState(INIT_LIST_STRING);
  const [recipe, setRecipe] = useState(RECIPE_STATE_EMPTY);
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const addBookmark = (recipe) => {
    const updatedBookmarks = state.bookmarks.concat(recipe);
    console.log('adding bookmark', updatedBookmarks);

    dispatch({
      type: 'ADD_BOOKMARK',
      payload: { bookmarks: updatedBookmarks },
    });
  };

  const removeBookmark = (recipe) => {
    const updatedBookmarks = state.bookmarks.filter(
      (currentRecipe) => currentRecipe.title !== recipe.title
    );
    console.log('removing bookmark', updatedBookmarks);

    dispatch({
      type: 'REMOVE_BOOKMARK',
      payload: {
        bookmarks: updatedBookmarks,
      },
    });
  };

  const value = {
    bookmarks: state.bookmarks,
    removeBookmark,
    addBookmark,
    query,
    setQuery,
    recipe,
    setRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

const useRecipe = () => {
  const context = useContext(RecipeContext);

  if (context === undefined) {
    throw new Error('useRecipe must be used withing RecipeContext');
  }
  return context;
};

export default useRecipe;
