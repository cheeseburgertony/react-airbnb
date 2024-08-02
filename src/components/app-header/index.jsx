import React, { memo, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

const AppHeader = memo(() => {
  // 组件内部状态
  const [isSearch, setIsSearch] = useState(true)

  // 从redux中取到头部相关信息来确定是否要进行样式修改
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig


  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={e => setIsSearch(true)} />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch}></SearchAreaWrapper>
      </div>
      {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader