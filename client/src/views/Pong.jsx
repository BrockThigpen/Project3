import React from 'react'
import PongContainer from '../containers/PongContainer/PongContainer'

const Pong= () => {
	return (
		<div className="gameContainer text-center">
		<PongContainer />
		<upBtn />
		<downBtn />
		</div>
	);
}

export default Pong;
