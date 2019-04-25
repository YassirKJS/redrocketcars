import { CHANGE_SEARCH_FIELD } from './constants.js';

// will take text and return an object
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})