import React from 'react';
import { Link } from 'react-router-dom';
import ball from '../images/ball_game.jpg';
import pong from '../images/pong.jpg';
import snake from '../images/snake_game.jpg';

const Games = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="/FlappyBird">
            <img src={ball} alt="ball_game" className="gameApps" />
          </Link>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="/Pong">
            <img src={pong} alt="ball_game" className="gameApps" />
          </Link>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="/snake">
            <img src={snake} alt="snake_game" className="gameApps" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
