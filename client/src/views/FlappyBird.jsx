import React from 'react';
import { render } from 'react-dom';
import '../css/BirdGameCss/main.css';
import AppContainer from '../containers/BirdContainers/AppContainer';
const FlappyBird = () => {
  return render(<AppContainer />, document.getElementById('root'));
};

export default FlappyBird;
