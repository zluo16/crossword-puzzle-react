import React from 'react'
import { ConnectedGridBox } from './gridBox'

const CrosswordGrid = ({ gridInfo }) => {
  return (
    <div id="wrapper">
      {gridInfo.length > 0 ? gridInfo.map(box => <ConnectedGridBox boxId={box.id} boxType={box.type} boxValue={box.value} />) : null}
    </div>
  )
}

export default CrosswordGrid
