import httpClient from './httpClient';
import axios from 'axios'

const pushScore = (score, game) => {
  // axios.get(window.location.origin + '/api/users/')
  const user = httpClient.getCurrentUser();
  const token = httpClient.getToken();
  switch (game) {
    case 'game1':
        axios.get(window.location.origin + '/api/users/' + user._id,
        {
          headers: {
            'token': token
          }
        }).then(user => {
          if (score > user.data.game1) {
            let strScore = parseInt(score);
            axios.patch(window.location.origin + '/api/users/' + user.data._id,
              { game1: strScore }, { headers: { 'token': token }},
              (err, res) => {
                if (err) return console.log(err);
              }
            );
          }
        })
      break;
    case 'game2':
      axios.get(window.location.origin + '/api/users/' + user._id,
        {
          headers: {
            'token': token
          }
        }).then(user => {
          if (score > user.data.game2) {
            let strScore = parseInt(score);
            axios.patch(window.location.origin + '/api/users/' + user.data._id,
              { game2: strScore }, { headers: { 'token': token }},
              (err, res) => {
                if (err) return console.log(err);
              }
            );
          }
        })
      break;
  }
}

export default pushScore;