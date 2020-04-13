import React from "react";
import { Link } from 'react-router-dom'
import "../../css/BirdGameCss/startScreen.css";

function StartScreen(props) {
    return (
        <div className="text-center" id="startScreen">
            <div className="flappyStart">
                <p><strong>Press space bar to start the game...</strong></p></div>
            <Link to="/Games">
                <button className="gameBtn2">Go Back</button>
            </Link>
            <button className="gameBtn2" id='startGame' onMouseDown={props.isGameStarted}>Start Game</button>
        </div>
    );
}

export default StartScreen;