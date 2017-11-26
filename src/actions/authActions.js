import AuthAdapter from '../adapters/authAdapter'

export function login(loginInfo) {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' })
    AuthAdapter.login(loginInfo)
      .then(res => {
        if (res.error) {
          dispatch({ type: 'LOGIN_FAILED', payload: res.error })
        } else {
          dispatch({ type: 'LOGIN_USER', payload: res })
          window.localStorage.setItem('jwt', res.jwt)
        }
      })
  }
}

export function signUp(signUpInfo) {
  return (dispatch) => {
    dispatch({ type: 'SIGNING_UP' })
    AuthAdapter.signUp(signUpInfo)
      .then(res => {
        if (res.error) {
          dispatch({ type: 'SIGN_UP_FAILED', payload: res.error })
        } else {
          dispatch({ type: 'USER_CREATED', payload: res })
          dispatch({ type: 'LOGIN_USER', payload: res })
          window.localStorage.setItem('jwt', res.jwt)
        }
      })
  }
}

export function logout() {
  return (dispatch) => {
    window.localStorage.clear()
    dispatch({ type: 'LOGOUT_USER' })
  }
}
