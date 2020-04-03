import React from 'react'

function Skunk(props) {
    return (
        <div id="gameOver">
            <div>Game Over!</div>
            <button onClick={() => document.location.reload()}>Restart</button>
        </div>
    );
}

export default Skunk;