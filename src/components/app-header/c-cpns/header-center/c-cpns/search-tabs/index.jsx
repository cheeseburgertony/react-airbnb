import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [activeIndex, setActiveIndex] = useState(0)

  const tabsClickHandle = (index) => {
    // 修改自己组件内的样式变化
    setActiveIndex(index)
    // 传回父组件通知要修改选中数据
    if (tabClick) tabClick(index)
  }

  return (
    <TabsWrapper>
      {titles.map((item, index) => (
        <div
          key={item}
          className={classNames('item', { active: index === activeIndex })}
          onClick={e => tabsClickHandle(index)}
        >
          <span className='text'>{item}</span>
          <span className='bottom'></span>
        </div>
      ))}
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
  tabClick: PropTypes.func
}

export default SearchTabs