import { useState } from 'react'
import TooltipComponent from './TooltipComponent'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function App() {
  const [position, setPosition] = useState('left')

  // # this function for set position
  const handleButtonClick = (value) => {
    setPosition(value)
  }

  return (
    <div className="App">
      <TooltipComponent position={position} />
      <ButtonGroup id="buttons">
        <Button
          variant="secondary"
          onClick={() => handleButtonClick('top')}
          className="button"
        >
          Top
        </Button>
        <div id="left-right">
          <Button
            variant="primary"
            onClick={() => handleButtonClick('left')}
            className="button"
          >
            Left
          </Button>
          <Button
            variant="success"
            onClick={() => handleButtonClick('right')}
            className="button"
          >
            Right
          </Button>
        </div>

        <Button
          variant="warning"
          onClick={() => handleButtonClick('bottom')}
          className="button"
        >
          Bottom
        </Button>
      </ButtonGroup>

      <div id="suggetionText">Click on button to select tooltip position</div>
    </div>
  )
}

export default App
