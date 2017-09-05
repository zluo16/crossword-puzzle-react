export const toggleInput = () => {
  return {
    type: 'TOGGLE_INPUT'
  }
}

export const addInput = (input) => {
  return {
    type: 'ADD_INPUT',
    payload: input
  }
}
