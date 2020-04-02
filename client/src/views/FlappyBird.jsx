import React from 'react';
import '../css/BirdGameCss/main.css';
import AppContainer from '../containers/BirdContainers/AppContainer';
const FlappyBird = () => {
  return (
    <div className="gameContainer text-center">
      <AppContainer />
    </div>
  );
};
export default FlappyBird;
