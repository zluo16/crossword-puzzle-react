import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import crosswordGridReducer from './CrosswordGridReducer'
import crosswordCluesReducer from './CrosswordCluesReducer'

export default combineReducers({
  auth: authReducer,
  crosswordGrid: crosswordGridReducer,
  clues: crosswordCluesReducer
})
