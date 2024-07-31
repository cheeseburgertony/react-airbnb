import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fecthGoodPriceInfo } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObj } from '@/utils/is-empty-obj'
import HomeLogfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {
  const dispatch = useDispatch()
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)



  useEffect(() => {
    dispatch(fecthGoodPriceInfo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyObj(longforInfo) && <HomeLogfor infoData={longforInfo} />}
        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home