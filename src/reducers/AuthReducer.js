export default function authReducer(state = {
  currentUser: {},
  loggedIn: false
}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        loggedIn: true,
        currentUser:{
          id: action.payload.id,
          username: action.payload.user_name
        }
      }

    case 'LOGOUT_USER':
      return {
        currentUser: {},
        loggedIn: false
      }

    case 'LOGIN_FAILED':
      return {
        ...state,
        loggedIn: false
      }

    default:
      return state
  }
}
