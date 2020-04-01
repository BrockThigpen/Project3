import React from 'react';
import axios from 'axios';
import httpClient from '../httpClient';

const Leaderboard = () => {
  // get current user
  const user = httpClient.getCurrentUser();
  console.log(user._id);
  // get all users
  axios
    .get(window.location.origin + '/api/users')
    .then(res => console.log(res.data));

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Leaderboard;
