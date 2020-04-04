import React from 'react';
import { render } from 'react-dom';
import PongContainer from '../containers/PongContainer/PongContainer.js';
const Pong = () => {
  return render(<PongContainer />, document.getElementById('root'));
};

export default Pong;
