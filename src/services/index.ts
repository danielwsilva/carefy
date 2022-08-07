import axios from 'axios';

const API_AUTH = 'https://github.com/login/oauth/';
const API_DATA = 'https://api.github.com/';

const dataAPI = axios.create({
  baseURL: API_DATA,
  headers: {
    Accept: 'application/json'
  }
});

const authAPI = axios.create({
  baseURL: API_AUTH,
  headers: {
    Accept: 'application/json'
  }
});

export { dataAPI, authAPI };