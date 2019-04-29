import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CARS_PENDING,
  REQUEST_CARS_SUCCESS,
  REQUEST_CARS_FAILED
} from './constants.js';

// will take text and return an object
export const setSearchFieldAction = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

//higher order function: a fct that returns a fct
export const requestCarsAction = () => (dispatch) => {
  dispatch({ type: REQUEST_CARS_PENDING});
  fetch('https://api.myjson.com/bins/v9hnc')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_CARS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CARS_FAILED, payload: error }))
}