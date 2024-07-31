import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fecthGoodPriceIndo } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo, highScoreInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  useEffect(() => {
    dispatch(fecthGoodPriceIndo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home