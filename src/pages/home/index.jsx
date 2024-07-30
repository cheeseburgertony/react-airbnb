import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthGoodPriceIndo } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

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
        <h1>{goodPriceInfo.title}</h1>
        <ul>
          {goodPriceInfo.list?.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home