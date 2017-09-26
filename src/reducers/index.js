import { combineReducers } from 'redux'

import crosswordGridReducer from './CrosswordGridReducer'
import crosswordCluesReducer from './CrosswordCluesReducer'

export default combineReducers({
  crosswordGrid: crosswordGridReducer,
  clues: crosswordCluesReducer
})
