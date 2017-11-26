export default function crosswordGrid(state = [], action) {
  switch (action.type) {

    case 'ADD_INPUT':
      let box = state.find(b => b.boxId === action.payload.id)
      box['value'] = action.payload.value
      return state

    case 'FETCH_CROSSWORD':
      console.log(action.payload);
      return action.payload

    default:
      return state
  }
}
