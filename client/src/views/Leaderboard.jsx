import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/leaderboard/leaderboard';

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
  return <Table playerData={playerData} />;
};

export default Leaderboard;
