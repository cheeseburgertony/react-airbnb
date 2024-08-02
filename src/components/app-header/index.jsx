import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 组件内部状态
  const [isSearch, setIsSearch] = useState(false)

  // 从redux中取到头部相关信息来确定是否要进行样式修改
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  // 监听屏幕滚动 根据滚动的距离来决定是否显示大搜索框
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 当不是搜索状态时，prevY一直保持和当前的scrollY相等
  if (!isSearch) prevY.current = scrollY
  // 一旦是搜索状态时(大搜索框显示)，就根据当前scrollY和prevY之间的差值(这里是两之差的绝对值(因为可能涉及到上下滚动)大于30就不显示)来判断是否要显示搜素状态
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // 顶部是否透明
  const isAlpha = topAlpha && scrollY === 0


  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader