import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://kenzie-feed-api.onrender.com/',
  timeout: 8000,
});
