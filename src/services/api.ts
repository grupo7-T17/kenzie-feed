import axios from 'axios';

export const apiA13 = axios.create({
  method: 'https://kenzie-feed-api.onrender.com/',
  timeout: 8000,
});
