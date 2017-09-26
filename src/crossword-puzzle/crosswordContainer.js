import React, { Component } from 'react'
import CrosswordGrid from './crosswordGrid'
import { ConnectedCrosswordCluesContainer } from './crosswordCluesContainer'
import { connect } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'

export class CrosswordContainer extends Component {

  state = {
    open: false,
    completed: false
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
        <CrosswordGrid gridInfo={this.props.gridInfo} onSubmit={this.onSubmit} />
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

export const ConnectedCrosswordContainer = connect(mapStateToProps)(CrosswordContainer)
