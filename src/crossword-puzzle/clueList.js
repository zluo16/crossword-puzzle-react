import React from 'react'
import Clue from './clue'
import { Grid } from 'semantic-ui-react'

const ClueList = ({ clues, numbers }) => {
  return (
    <Grid className="make-tighter">
      <ul className="no-bullets">
        {clues.map((clue, i) => <Clue clueInfo={clue} num={numbers[i]} />)}
      </ul>
    </Grid>
  )
}

export default ClueList
