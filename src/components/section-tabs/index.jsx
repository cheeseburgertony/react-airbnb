import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const itemClickHandle = (index, item) => {
    setActiveIndex(index)
    tabClick(item)
  }

  return (
    <TabsWrapper>
      {tabNames?.map((item, index) => (
        <div
          key={item}
          className={classNames('item', { active: index === activeIndex })}
          onClick={e => itemClickHandle(index, item)}
        >
          {item}
        </div>
      ))}
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs