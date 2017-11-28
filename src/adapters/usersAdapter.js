const baseUrl = 'https://crossword-puzzle-api.herokuapp.com/api/v1'

export default class UsersAdapter {
  static topFiveUsers() {
    return fetch(`${baseUrl}/users`)
      .then(res => res.json())
  }

  static updateUserScore(id) {
    const userData = Object.assign({}, { id: id }, { score: 20 })
    return fetch(`${baseUrl}/users/${id}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(userData)
    }).then(res => res.json())
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
