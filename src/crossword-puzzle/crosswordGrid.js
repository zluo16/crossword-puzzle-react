import React from 'react'
import { ConnectedGridBox } from './gridBox'
import { Button } from 'semantic-ui-react'

const CrosswordGrid = ({ gridInfo, onSubmit }) => {
  return (
    <div id="wrapper">
      {gridInfo.map(box => <ConnectedGridBox key={box.boxId} boxId={box.boxId} boxType={box.type} boxValue={box.value} boxKey={box.key} />)}
      <Button content="Submit" onClick={onSubmit} className="center-button" />
    </div>
  )
}

export default CrosswordGrid
