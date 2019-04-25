import { CHANGE_SEARCH_FIELD } from './constants.js';

//principle (1)
const initialState = {
  searchField: ''
}

export const searchCars = (state=initialState, action={}) => {
  switch(action.type) {
    case: CHANGE_SEARCH_FIELD:
      //Object.assign(cible, ...sources, {cible:source})
      return Object.assign({}, state, {searchField:action.payload})
      //return { ...state, searchField: action.payload }
    default:
      return state;
  }
}