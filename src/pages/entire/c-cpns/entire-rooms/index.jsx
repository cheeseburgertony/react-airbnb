import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfo } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  // 从Redux中获取关于entire页面数据
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  // 点击RoomItem进行跳转
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goToDetail = useCallback((item) => {
    // 将相对应的数据保存到redux中便于在detail页面展示(因为没有对应根据id展示的接口)
    dispatch(changeDetailInfo(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map(item => (
          <RoomItem goToDetail={goToDetail} key={item._id} itemData={item} itemWidth='20%' />
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms