import React, { Component } from 'react'
import * as actions from '../actions/inputActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class GridBox extends Component {

  state = {
    value: this.props.boxValue,
    selected: false
  }

  handleInput = (event) => {
    let input = Object.assign({}, { value: event.target.value.toUpperCase() }, { id: event.target.id })
    this.props.actions.addInput(input)
    this.setState({
      value: event.target.value.toUpperCase(),
      selected: false
    })
  }

  handleClick = () => {
    if (this.props.boxType !== 'filled') {
      this.setState({ selected: true })
    }
  }

  render() {
    const name = `${this.props.boxId}Input`

    return (
      <div className={this.props.boxType} id={this.props.boxId} onClick={this.handleClick}>
        {this.state.selected ?
          <input type="text" id={this.props.boxId} name={name} className="textbox" maxLength="1" onChange={this.handleInput} autoFocus />
          :
          <p className="center-words">{this.state.value}</p>
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedGridBox = connect(null, mapDispatchToProps)(GridBox)
