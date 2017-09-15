import React, { Component } from 'react'
import CrosswordGrid from './crosswordGrid'
import { connect } from 'react-redux'

export class CrosswordContainer extends Component {

  render() {
    return (
      <div>
        <CrosswordGrid gridInfo={this.props.gridInfo.crosswordGrid} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { gridInfo: state }
}

export const ConnectedCrosswordContainer = connect(mapStateToProps)(CrosswordContainer)
