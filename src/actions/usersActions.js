import fetch from 'isomorphic-fetch'
const baseUrl = 'https://crossword-puzzle-api.herokuapp.com/api/v1'

export function fetchTopFiveUsers() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' })
    return fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(users => {
        dispatch({ type: 'FETCH_USERS', payload: users })
      })
  }
}
