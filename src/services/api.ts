import axios from 'axios';

export const api = axios.create({
  method: 'https://kenzie-feed-api.onrender.com/',
  timeout: 8000,
});
