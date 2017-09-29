import React, { Component } from 'react'
import CrosswordGrid from './crosswordGrid'
import { ConnectedCrosswordCluesContainer } from './crosswordCluesContainer'
import { connect } from 'react-redux'
import { Modal, Header } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fetchActions'

export class CrosswordContainer extends Component {

  state = {
    open: false,
    completed: false
  }

  componentDidMount() {
    if (this.props.gridInfo.length === 0) {
      this.props.actions.fetchPuzzle()
      this.props.actions.fetchClues()
    }
  }

  onGenerate = () => {
    this.props.actions.fetchPuzzle()
    this.props.actions.fetchClues()
  }

  onSubmit = () => {
    if (this.props.gridInfo.every(grid => grid.key === grid.value)) {
      this.setState({ open: true, completed: true })
    } else {
      this.setState({ open: true, completed: false })
    }
  }

  close = () => this.setState({ open: false })

  render() {
    const header = this.state.completed ? "Congradulations!!!" : "Something's not quite right."
    const content = this.state.completed ? "You Won!" : "Try again."

    return (
      <div>
        <Header size="huge" className="center-align">Crossword Puzzle</Header>
        <CrosswordGrid gridInfo={this.props.gridInfo} onSubmit={this.onSubmit} onGenerate={this.onGenerate} />
        <ConnectedCrosswordCluesContainer />

        <Modal size="tiny" open={this.state.open} onClose={this.close}>
          <Modal.Header>
            {header}
          </Modal.Header>
          <Modal.Content>
            {content}
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { gridInfo: state.crosswordGrid }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedCrosswordContainer = connect(mapStateToProps, mapDispatchToProps)(CrosswordContainer)
