import React from 'react';
import '../css/index.sass';
import '../css/index.css';
import App from '../containers/SnakeContainer/App';
const Snake = () => {
  return (
    <div className="gameContainer text-center">
      <App />
    </div>
  );
};
export default Snake;