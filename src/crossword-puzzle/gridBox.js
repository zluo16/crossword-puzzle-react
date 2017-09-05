import React, { Component } from 'react'
import * as actions from '../actions/inputActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class GridBox extends Component {

  state = {
    value: '',
    id: ''
  }

  handleInput = (event) => {
    // this.setState({ value: event.target.value, id: event.target.id })
    let input = Object.assign({}, { value: event.target.value }, { id: event.target.id })
    this.props.actions.addInput(input)
  }

  render() {
    return (
      <div className={this.props.boxType} id={this.props.boxId}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return { input: state }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedGridBox = connect(mapStateToProps, mapDispatchToProps)(GridBox)
