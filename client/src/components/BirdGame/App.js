import React from "react";
import BirdContainer from "../../containers/BirdContainers/BirdContainer";
import PillarContainer from "../../containers/BirdContainers/PillarContainer";
import Score from "./Score";
import GameOver from "./GameOver";
import StartScreen from "./StartScreen";


function App(props) {
  if (props.isGameStarted) {

    return (
      <div>
        <BirdContainer isGameOver={props.isGameOver}
          handleGameOver={props.handleGameOver}
          handleScore={props.handleScore} />
        <PillarContainer isGameOver={props.isGameOver} />
        <Score score={props.score} />
        {props.isGameOver && <GameOver />}
        
       
      </div>
    );
    
  } else {
    return (
      <div>
      
      <StartScreen />
      </div>
    )
  }

  
}

export default App;