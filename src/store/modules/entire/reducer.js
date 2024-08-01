import * as actionTypes from './constants'

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    default:
      return state
  }
}

export default reducer