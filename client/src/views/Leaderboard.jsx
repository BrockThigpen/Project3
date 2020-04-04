import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [playerData, setPlayerData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(window.location.origin + '/api/users')
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => setError(err));
  }, []);
  console.log(playerData);
  return <></>;
};

export default Leaderboard;
