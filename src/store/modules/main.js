import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'name',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, action) {
      state.headerConfig = action.payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer
