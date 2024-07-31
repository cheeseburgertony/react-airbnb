import request from "../request";

// 获取高性价比房源数据
export const getHomeGoodpriceAPI = () => request.get('/home/goodprice')

// 获取高分房源数据
export const getHomeHighscoreAPI = () => request.get('/home/highscore')

// 获取折扣优惠房源数据
export const getHomeDiscountAPI = () => request.get('/home/discount')

// 获取热门推荐房源数据
export const getHomeHotrecommendAPI = () => request.get('/home/hotrecommenddest')

// 获取向往城市数据
export const getHomeLongforAPI = () => request.get('/home/longfor')
