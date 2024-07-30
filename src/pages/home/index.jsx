import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthGoodPriceIndo } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'

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
          <ul>
            {goodPriceInfo.list?.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home