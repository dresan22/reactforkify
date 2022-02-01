import { createContext, useReducer, useContext, useState } from 'react';
import recipeReducer, { initialState } from './reducer';
import { RECIPE_STATE_EMPTY, INIT_LIST_STRING } from '../utils/constants';
import { useLocalStorage } from '../components/useLocalStorage/useLocalStorage';

export const RecipeContext = createContext({ initialState });

export const RecipeProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState(INIT_LIST_STRING);
  const [recipe, setRecipe] = useState(RECIPE_STATE_EMPTY);
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const [loading, setLoading] = useState(false);

  const [savedBookmarks, setSavedBookmarks] = useLocalStorage(
    'savedbookmarks',
    []
  );

  //loading single recipe state
  const [recipeLoading, setRecipeLoading] = useState(true);

  const addBookmark = (recipe) => {
    const updatedBookmarks = state.bookmarks.concat(recipe);

    dispatch({
      type: 'ADD_BOOKMARK',
      payload: { bookmarks: updatedBookmarks },
    });
  };

  const removeBookmark = (recipe) => {
    const updatedBookmarks = state.bookmarks.filter(
      (currentRecipe) => currentRecipe.title !== recipe.title
    );

    dispatch({
      type: 'REMOVE_BOOKMARK',
      payload: {
        bookmarks: updatedBookmarks,
      },
    });
  };

  const setBookmarks = () => {
    // const updatedBookmarks = state.savedBookmarks;

    dispatch({
      type: 'SET_SAVED_BOOKMARKS',
      payload: { bookmarks: savedBookmarks },
    });
  };

  function handleResults(newRecipe) {
    setUrl(`https://forkify-api.herokuapp.com/api/v2/recipes/${newRecipe.id}/`);
  }

  const systemVariables = {
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
    loading,
    setLoading,
    recipeLoading,
    setRecipeLoading,
    savedBookmarks,
    setSavedBookmarks,
    setBookmarks,
  };

  return (
    <RecipeContext.Provider value={systemVariables}>
      {children}
    </RecipeContext.Provider>
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
