import { getEntireListAPI } from '@/services'
import * as actionTypes from './constants'

export const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

// 异步action
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page))
    // const currentPage = getState().entire.currentPage
    // 监测是否加载完毕
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireListAPI(page * 20)
    dispatch(changeIsLoadingAction(false))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}