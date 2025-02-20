import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: 'https://healthyhub.onrender.com/api/',
});

export const setGlobalAuthHeader = token => {
  axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const resetGlobalAuthHeader = () => {
  delete axiosAuth.defaults.headers.common['Authorization'];
};
