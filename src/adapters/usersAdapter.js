const baseUrl = 'https://crossword-puzzle-api.herokuapp.com/api/v1'

export default class UsersAdapter {
  static topFiveUsers() {
    return fetch(`${baseUrl}/users`)
      .then(res => res.json())
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
