import React from 'react'
import { render } from 'react-dom'
import "../css/BirdGameCss/main.css";
import AppContainer from '../containers/BirdContainers/AppContainer';
const FlappyBird = () => {
	return (
		<div className="gameContainer text-center">
			render(<AppContainer />, document.getElementById('root'))
			</div>
	)
}

export default FlappyBird
