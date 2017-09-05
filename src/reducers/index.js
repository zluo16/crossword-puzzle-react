import { combineReducers } from 'redux'

import crosswordGridReducer from './CrosswordGridReducer'

export default combineReducers({
  crosswordGrid: crosswordGridReducer
})
