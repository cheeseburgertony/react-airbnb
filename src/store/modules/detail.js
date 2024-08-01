import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfo(state, action) {
      state.detailInfo = action.payload
    }
  }
})

export const { changeDetailInfo } = detailSlice.actions

export default detailSlice.reducer
