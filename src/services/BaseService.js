import axios from 'axios';

export const createHttp = () => {
  const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  http.interceptors.response.use(
    (response) => response.data,
    (err) => Promise.reject(err)
  )

  return http;
}