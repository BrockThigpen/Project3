import React from "react";
import "../../css/gameover.css";
import { Link } from 'react-router-dom';

function GameOver(props) {
  return (
    <div>
    <div id="gameOver" className="text-center">
      <div>Game Over!</div>
      <button className="gameBtn2" onClick={() => document.location.reload()}>Restart</button>
    </div>
    <div id="gameOver" className="text-center">
    <Link to="/Games">
    <button className="gameBtn2" >View Games!</button>
    </Link>
  </div>
  </div>
  );
}

export default GameOver;