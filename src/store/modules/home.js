import { getHomeDiscountAPI, getHomeGoodpriceAPI, getHomeHighscoreAPI, getHomeHotrecommendAPI, getHomeLongforAPI, getHomePlusAPI } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload
    },
    changeHighscoreInfo(state, action) {
      state.highScoreInfo = action.payload
    },
    changeDiscountInfo(state, action) {
      state.discountInfo = action.payload
    },
    changeRecommendInfo(state, action) {
      state.recommendInfo = action.payload
    },
    changeLongforInfo(state, action) {
      state.longforInfo = action.payload
    },
    changePlushInfo(state, action) {
      state.plusInfo = action.payload
    }
  }
})

// actionCreators
export const {
  changeGoodPriceInfo,
  changeHighscoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo,
  changePlushInfo
} = homeSlice.actions

// 异步操作
export const fecthGoodPriceInfo = () => {
  return async (dispatch) => {
    // 这里使用Promise.all也可以实现同样效果
    // 这里这样写.then会更加简便
    getHomeGoodpriceAPI().then(res => {
      dispatch(changeGoodPriceInfo(res))
    })
    getHomeHighscoreAPI().then(res => {
      dispatch(changeHighscoreInfo(res))
    })
    getHomeDiscountAPI().then(res => {
      dispatch(changeDiscountInfo(res))
    })
    getHomeHotrecommendAPI().then(res => {
      dispatch(changeRecommendInfo(res))
    })
    getHomeLongforAPI().then(res => {
      dispatch(changeLongforInfo(res))
    })
    getHomePlusAPI().then(res => {
      dispatch(changePlushInfo(res))
    })
  }
}

export default homeSlice.reducer