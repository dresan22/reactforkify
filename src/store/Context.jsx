import { createContext, useReducer, useContext, useState } from 'react';
import recipeReducer, { initialState } from './reducer';
import { RECIPE_STATE_EMPTY, INIT_LIST_STRING } from '../utils/constants';

export const RecipeContext = createContext({ initialState });

export const RecipeProvider = ({ children }) => {
  const [url, setUrl] = useState('');
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

  function handleResults(newRecipe) {
    setUrl(`https://forkify-api.herokuapp.com/api/v2/recipes/${newRecipe.id}/`);
  }

  const value = {
    bookmarks: state.bookmarks,
    removeBookmark,
    addBookmark,
    query,
    setQuery,
    recipe,
    setRecipe,
    handleResults,
    url,
    setUrl,
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
