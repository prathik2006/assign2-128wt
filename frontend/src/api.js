

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_BACKEND_URL + '/api'
});

export default api;