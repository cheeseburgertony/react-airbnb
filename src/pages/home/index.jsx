import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthGoodPriceIndo } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const dispatch = useDispatch()
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo)

  useEffect(() => {
    dispatch(fecthGoodPriceIndo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home