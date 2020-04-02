import httpClient from './httpClient';
import axios from 'axios'

const pushScore = (score, game) => {
  // axios.get(window.location.origin + '/api/users/')
  const user = httpClient.getCurrentUser();
  switch (game) {
    case 'game1':
      if (score > user.game1) {
        axios.patch(window.location.origin + '/api/users/' + user._id);
      }
      break;
    case 'game2':
      console.log(user)
      if (score > user.game2) {
        axios.patch(window.location.origin + '/api/users/' + user._id,
          { 
            game2: score
          },
          function (err, res) {
            if (err) {
              console.log(err)
            } else {
              console.log(res)
            }
          }
        );
      }
      break;
  }
}

export default pushScore;