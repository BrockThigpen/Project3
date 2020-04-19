import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/leaderboard/leaderboard';
import { Offline, Online } from 'react-detect-offline';
import httpClient from '../httpClient';

let game1Data = JSON.parse(localStorage.getItem('game1Data'));
let game2Data = JSON.parse(localStorage.getItem('game2Data'));
let game3Data = JSON.parse(localStorage.getItem('game3Data'));
const user = httpClient.getCurrentUser();
const token = httpClient.getToken();

window.addEventListener('load', () => {
  axios
    .get(`/api/users/${user._id}`, {
      headers: {
        token: token,
      },
    })
    .then((user) => {
      if (game1Data && game1Data.score > user.data.game1) {
        axios.patch(
          `/api/users/${user.data._id}`,
          { game1: game1Data.score },
          { headers: { token: token } },
          (err, res) => {
            if (err) return console.log(err);
          }
        );
      }

      if (game2Data && game2Data.score > user.data.game2) {
        axios.patch(
          `/api/users/${user.data._id}`,
          { game2: game2Data.score },
          { headers: { token: token } },
          (err, res) => {
            if (err) return console.log(err);
          }
        );
      }

      if (game3Data && game3Data.score > user.data.game3) {
        axios.patch(
          `/api/users/${user.data._id}`,
          { game3: game3Data.score },
          { headers: { token: token } },
          (err, res) => {
            if (err) return console.log(err);
          }
        );
      }

      localStorage.removeItem('game1Data');
      localStorage.removeItem('game2Data');
      localStorage.removeItem('game3Data');
    });
});

const Leaderboard = () => {
  const [playerData, setPlayerData] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => setError(err));
  }, []);
  return (
    <div className="text-center">
      <Online>
        <Table playerData={playerData} />
      </Online>
      <Offline>No network detected. Please reconnect to a network.</Offline>
    </div>
  );
};

export default Leaderboard;
