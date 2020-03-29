import React from 'react'
import { render } from "react-dom";
// import vipImage from '../vip.png'
import AppContainer from "../containers/BirdContainers/AppContainer";
import "../css/BirdGameCss/main.css";

const Games = (props) => {
	return (
		<div className='VIP'>
			{render(<AppContainer />, document.getElementById("root"))};
		</div>
	)
}

export default Games