import React from "react";

import "../../css/BirdGameCss/score.css";

function Score(props) {
    return <div id="score">{props.score}</div>;
}

export default Score;