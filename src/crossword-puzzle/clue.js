import React, { Component } from 'react'

export default class Clue extends Component {

  render() {
    const { num, clueInfo } = this.props
    const clue = `${num}. ${clueInfo.clue}`

    return (
      <li>
        <p className="clue-text">{clue}</p>
      </li>
    )
  }
}
