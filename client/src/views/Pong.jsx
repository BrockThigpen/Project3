import React from 'react'
import PongContainer from '../containers/PongContainer/PongContainer'
import upBtn from '../components/Pong/upBtn'
import downBtn from '../components/Pong/downBtn'

const Pong= () => {
	return (
		<div className="gameContainer text-center">
		<PongContainer />
		<upBtn />
		<downBtn />
		</div>
			// render(<PongContainer/>, document.getElementById('root'))
	);
}

export default Pong;
