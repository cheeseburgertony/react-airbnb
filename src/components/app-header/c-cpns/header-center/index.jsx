import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './c-cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo(() => {
  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map(item => item.title)

  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearch />
        </div>
      </div> */}
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={index => setTabIndex(index)} />
        <div className="infos">
          <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter