import request from "../request";

export const getEntireListAPI = (offset = 0, size = 20) =>
  request.get('/entire/list', { params: { offset, size } })
