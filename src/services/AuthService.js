import { createHttp } from "./BaseService";

const http = createHttp();

export const register = (data) => {
  return http.post('/users', data)
}