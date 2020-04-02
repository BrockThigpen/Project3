import React from "react";

import BirdContainer from "../../containers/BirdContainers/BirdContainer";
import PillarContainer from "../../containers/BirdContainers/PillarContainer";
import Score from "./Score";
import GameOver from "./GameOver";
import StartScreen from "./StartScreen";
import FlyBtn from './FlyBtn'
import PongContainer from '../../containers/PongContainer/PongContainer'
import Skunk from '../../containers/PongContainer/Skunk'


function Pong(props) {
	if (props.isGameStarted) {
		
		return (
			<div>
				<PongContainer />
				<Skunk />
			</div>
		);
	} else {
		return <StartScreen />;
	}
}

export default App;