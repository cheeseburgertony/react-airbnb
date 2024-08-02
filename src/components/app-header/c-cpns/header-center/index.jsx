import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './c-cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map(item => item.title)

  const searchBarClickHandle = () => {
    if (searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={index => setTabIndex(index)} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter