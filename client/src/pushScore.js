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
          console.log(user.data.game1)
          if (score > user.data.game1) {
            axios.patch(window.location.origin + '/api/users/' + user.data._id,
              { game1: score }, { headers: { 'token': token }},
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
          console.log(user.data.game2)
          if (score > user.data.game2) {
            axios.patch(window.location.origin + '/api/users/' + user.data._id,
              { game2: score }, { headers: { 'token': token }},
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