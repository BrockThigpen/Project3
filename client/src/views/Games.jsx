import React from 'react'
import { Link } from 'react-router-dom'
import vipImage from '../vip.png'


const Games = () => {
	return (
		<div className='VIP'>
			<span>
				
				<Link to="/FlappyBird">
				<img src={vipImage} alt="VIP" /></Link>
			</span>
		</div>


	)
}

export default Games
