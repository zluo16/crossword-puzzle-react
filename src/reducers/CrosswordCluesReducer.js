export default function crosswordClues(state = [], action) {
  switch (action.type) {

    case 'FETCH_CLUES':
      console.log(action.payload);
      return action.payload

    default:
      return state
  }
}
