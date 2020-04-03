import React from "react";
import { Link } from 'react-router-dom'
import "../../css/BirdGameCss/startScreen.css";
import FlyBtn from './FlyBtn'

function StartScreen(props) {
    return (
        <div className="text-center" id="startScreen">
             <FlyBtn/>
            <div className="flappyStart">
                <p><strong>Press space bar / white button to start the game...</strong></p></div>
            <Link to="/Games">
                <button className="gameBtn2">Go Back</button>
            </Link>
        </div>
    );
}

export default StartScreen;