import React, { Component } from 'react'
import CrosswordGrid from './crosswordGrid'
import Nav from './nav'
import { ConnectedCrosswordCluesContainer } from './crosswordCluesContainer'
import { connect } from 'react-redux'
import { Modal, Header } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import * as crosswordActions from '../actions/fetchActions'
import * as authActions from '../actions/authActions'
import * as usersActions from '../actions/usersActions'

export class CrosswordContainer extends Component {

  state = {
    open: false,
    completed: false,
    username: '',
    password: '',
    passwordConfirmation: ''
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

  onAuthChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onLogin = () => {
    let loginInfo = Object.assign({},
      { user_name: this.state.user_name },
      { password: this.state.password }
    )
    this.props.actions.login(loginInfo)
  }

  onSignUp = () => {
    let signUpInfo = Object.assign({},
      { user_name: this.state.user_name },
      { password: this.state.password },
      { password_confirmation: this.state.passwordConfirmation }
    )
    this.props.actions.signUp(signUpInfo)
  }

  close = () => this.setState({ open: false })

  render() {
    const header = this.state.completed ? "Congradulations!!!" : "Something's not quite right."
    const content = this.state.completed ? "You Won!" : "Try again."

    return (
      <div>
        <Nav
          onAuthChange={this.onAuthChange}
          onLogin={this.onLogin}
          onSignUp={this.onSignUp}
        />
        <Header size="huge" className="center-align">Crossword Puzzle</Header>
        <CrosswordGrid
          gridInfo={this.props.gridInfo}
          onSubmit={this.onSubmit}
          onGenerate={this.onGenerate}
        />
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
  return {
    gridInfo: state.crosswordGrid,
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.loggedIn,
    topUsers: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  const combinedActions = Object.assign({}, crosswordActions, authActions, usersActions)
  return { actions: bindActionCreators(combinedActions, dispatch) }
}

export const ConnectedCrosswordContainer = connect(mapStateToProps, mapDispatchToProps)(CrosswordContainer)
