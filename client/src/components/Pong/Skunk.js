import React from 'react'
import { Link } from 'react-router-dom'

function Skunk(props) {
    return (
        <div id="gameOver2">
            <div>Game Over!</div>
            <button onClick={() => document.location.reload()}  className="gameBtn2">Restart</button>
            <Link to="/Games">
                <button className="gameBtn2">Home</button>
            </Link>
        </div>
    );
}

export default Skunk;