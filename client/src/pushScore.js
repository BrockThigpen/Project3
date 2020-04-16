// TODO: =========================//
// 
// when network connect is reestablished 
// check scores from localstorage against
// score in the DB, update if needed
// 
// ============================== //

import httpClient from './httpClient';
import axios from 'axios'

// used for retrieving logged in users info
const user = httpClient.getCurrentUser();
const token = httpClient.getToken();

// checking connention status
window.addEventListener('online', () => console.log('connected'))
window.addEventListener('offline', () => console.log('not connected'))

const pushScore = (score, game) => {

  // get current values stored in localstorage
  let current1 = JSON.parse(localStorage.getItem('game1Data'))
  let current2 = JSON.parse(localStorage.getItem('game2Data'))
  let current3 = JSON.parse(localStorage.getItem('game3Data'))

  // obj for localstorage
  let scoreData = {
    'game': game,
    'score': score
  }
  scoreData = JSON.stringify(scoreData)

  // if offline
  if (!navigator.onLine) {
    // game1
    switch (game) {
      case 'game1':
        // check if there is data stored in localstorage
        if (!current1) {
          localStorage.setItem('game1Data', scoreData);
          break;
        }
        // check the current score against score in localstorage
        if (score > current1.score) { localStorage.setItem('game1Data', scoreData) }
        break;

      //game2
      case 'game2':
        if (!current2) {
          localStorage.setItem('game2Data', scoreData);
          break;
        }
        if (score > current2.score) { localStorage.setItem('game2Data', scoreData) }
        break;

      case 'game3':
        if (!current3) {
          localStorage.setItem('game3Data', scoreData);
          break;
        }
        if (score > current3.score) { localStorage.setItem('game3Data', scoreData) }
        break;
    }

    // if online
  }
  if (navigator.onLine) {
    switch (game) {
      case 'game1':
        axios.get(`/api/users/${user._id}`,
          {
            headers: {
              'token': token
            }
          }).then(user => {
            if (score > user.data.game1) {
              axios.patch(`/api/users/${user.data._id}`,
                { game1: score }, { headers: { 'token': token } },
                (err, res) => {
                  if (err) return console.log(err);
                }
              );
            }
          })
        break;
      case 'game2':
        axios.get(`/api/users/${user._id}`,
          {
            headers: {
              'token': token
            }
          }).then(user => {
            if (score > user.data.game2) {
              axios.patch(`/api/users/${user.data._id}`,
                { game2: score }, { headers: { 'token': token } },
                (err, res) => {
                  if (err) return console.log(err);
                }
              );
            }
          })
        break;
        case 'game3':
          axios.get(`/api/users/${user._id}`,
            {
              headers: {
                'token': token
              }
            }).then(user => {
              if (score > user.data.game3) {
                axios.patch(`/api/users/${user.data._id}`,
                  { game3: score }, { headers: { 'token': token } },
                  (err, res) => {
                    if (err) return console.log(err);
                  }
                );
              }
            })
          break;
    }
  }
}

export default pushScore;