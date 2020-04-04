import React from 'react'
import { render } from 'react-dom'
import PongContainer from '../containers/PongContainer/PongContainer'
const Pong= () => {
	return (
		<div className="gameContainer text-center">
		<PongContainer />
		</div>
			// render(<PongContainer/>, document.getElementById('root'))
		
	)
}

export default Pong
