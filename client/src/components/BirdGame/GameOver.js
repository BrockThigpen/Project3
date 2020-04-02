import React from "react";
import { Link } from 'react-router-dom'
import "../../css/BirdGameCss/gameOver.css";

function GameOver(props) {
    return (
        <div id="gameOver" className="text-center">
            <div>Game Over!</div>
            <button className="gameBtn2" onClick={() => document.location.reload()}>Restart</button>
            <Link to="/Games">
                <button className="gameBtn2">Home</button>
            </Link>
            
        </div>
    );
}

export default GameOver;