import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/leaderboard/leaderboard';
import { Offline, Online } from 'react-detect-offline';

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
