import fetch from 'isomorphic-fetch'

export function fetchPuzzle() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PUZZLE' })
    return fetch('https://crossword-puzzle-api.herokuapp.com/api/v1/puzzles/generate')
      .then(res => res.json())
      .then(res => {
        let grid = res.grid_boxes.sort((a, b) => a.boxId - b.boxId)
        dispatch({ type: 'FETCH_CROSSWORD', payload: grid })
      })
  }
}

export function fetchClues() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CLUES' })
    return fetch('https://crossword-puzzle-api.herokuapp.com/api/v1/puzzles/generate')
      .then(res => res.json())
      .then(res => {
        let clues = res.puzzle_words.map(word => {
          return { boxId: word.boxId, alignment: word.alignment, answer: word.word.answer, clue: word.word.question }
        })
        dispatch({ type: 'FETCH_CLUES', payload: clues })
      })
  }
}
