import UsersAdapter from '../adapters/usersAdapter'

export function fetchTopFiveUsers() {
  return (dispatch) => {
    UsersAdapter.topFiveUsers()
      .then(users => {
        dispatch({ type: 'FETCH_USERS', payload: users })
      })
  }
}

export function updateUserScore(id) {
  return (dispatch) => {
    UsersAdapter.updateUserScore(id)
      .then(users => {
        dispatch({ type: 'UPDATE_USER_SCORE', payload: users })
      })
  }
}
