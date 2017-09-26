import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClueList from './clueList'
import { Grid } from 'semantic-ui-react'

export class CrosswordCluesContainer extends Component {

  render() {
    const acrossNums = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12]
    const downNums = [5, 7, 8]
    const acrossClues = this.props.clues.filter(clue => clue.alignment === 'across')
    const downClues = this.props.clues.filter(clue => clue.alignment === 'down')
    const across = acrossClues.sort((clue1, clue2) => parseInt(clue1.boxId, 10) - parseInt(clue2.boxId, 10))
    const down = downClues.sort((clue1, clue2) => parseInt(clue1.boxId, 10) - parseInt(clue2.boxId, 10))

    return (
      <div className="left-pusher">
        <Grid columns={2} className="make-wider">
          <Grid.Row>
            <Grid.Column>
              <ClueList clues={across} numbers={acrossNums} />
            </Grid.Column>
            <Grid.Column>
              <ClueList clues={down} numbers={downNums} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { clues: state.clues }
}

export const ConnectedCrosswordCluesContainer = connect(mapStateToProps)(CrosswordCluesContainer)
