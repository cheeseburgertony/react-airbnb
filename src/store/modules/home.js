import { getHomeGoodpriceAPI } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload
    }
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions

// 异步操作
export const fecthGoodPriceIndo = () => {
  return async (dispatch) => {
    const res = await getHomeGoodpriceAPI()
    dispatch(changeGoodPriceInfo(res))
  }
}

export default homeSlice.reducer