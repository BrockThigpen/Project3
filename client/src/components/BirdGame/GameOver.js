import React from "react";
import "../../css/BirdGameCss/gameOver.css";

function GameOver(props) {
  return (
    <div id="gameOver" className="text-center">
      <div>Game Over!</div>
      <button className="gameBtn2" onClick={() => document.location.reload()}>Restart</button>
    </div>
  );
}

export default GameOver;