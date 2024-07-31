import request from "../request";

export const getHomeGoodpriceAPI = () => request.get('/home/goodprice')

export const getHomeHighscoreAPI = () => request.get('/home/highscore')
