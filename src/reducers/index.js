import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import crosswordGridReducer from './CrosswordGridReducer'
import crosswordCluesReducer from './CrosswordCluesReducer'
import usersReducer from './UsersReducer'

export default combineReducers({
  auth: authReducer,
  crosswordGrid: crosswordGridReducer,
  clues: crosswordCluesReducer,
  users: usersReducer
})
