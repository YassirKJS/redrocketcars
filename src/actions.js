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

export const requestCarsAction = (dispatch) => {
  dispatch({ type: REQUEST_CARS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_CARS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CARS_FAILED, payload: error }))
}