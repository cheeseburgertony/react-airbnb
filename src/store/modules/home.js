import { getHomeDiscountAPI, getHomeGoodpriceAPI, getHomeHighscoreAPI } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
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
    }
  }
})

export const { changeGoodPriceInfo, changeHighscoreInfo, changeDiscountInfo } = homeSlice.actions

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
  }
}

export default homeSlice.reducer