import React from 'react'
import { ConnectedGridBox } from './gridBox'
import { Button } from 'semantic-ui-react'

const CrosswordGrid = ({ gridInfo, onSubmit, onGenerate }) => {
  return (
    <div id="wrapper">
      {gridInfo.map(box => <ConnectedGridBox key={box.boxId} boxId={box.boxId} boxType={box.className} boxValue={box.value} boxKey={box.key} />)}
      <Button.Group size="large" className="center-button">
        <Button content="Submit" onClick={onSubmit} />
        <Button.Or />
        <Button content="Generate New Puzzle" onClick={onGenerate} />
      </Button.Group>
    </div>
  )
}

export default CrosswordGrid
