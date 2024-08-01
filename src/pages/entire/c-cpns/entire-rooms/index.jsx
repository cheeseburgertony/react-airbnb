import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(() => {
  // 从Redux中获取关于entire页面数据
  const { roomList, totalCount } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }), shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map(item => (
          <RoomItem key={item._id} itemData={item} itemWidth='20%' />
        ))}
      </div>

    </RoomsWrapper>
  )
})

export default EntireRooms