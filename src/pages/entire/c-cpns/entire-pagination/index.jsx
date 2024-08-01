import React, { memo } from 'react'
import { PageWrapper } from './style'
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  const { currentPage, totalCount, roomList } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  const pageChangeHandle = (e, value) => {
    // 每次切换页时回到顶部
    window.scroll(0, 0)

    // 调用dispacth进行派发，重新获取新数据
    dispatch(fetchRoomListAction(value - 1))
  }

  return (
    <PageWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PageWrapper>
  )
})

export default EntirePagination