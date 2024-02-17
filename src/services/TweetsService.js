import { createHttp } from "./BaseService";

const http = createHttp(true);

export const getTimeline = (page) => {
  return http.get(`/tweets/timeline/${page}`)
}