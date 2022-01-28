export const initialState = {
  bookmarks: [],
  currentRecipe: {},
};

const recipeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: payload.bookmarks,
      };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmarks: payload.bookmarks,
      };

    default:
      throw new Error(`No case for type ${type} found in recipeReducer.`);
  }
};
export default recipeReducer;
