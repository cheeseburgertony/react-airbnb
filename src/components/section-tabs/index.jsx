import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props
  const [activeIndex, setActiveIndex] = useState(0)
  tabNames.push('abc')
  tabNames.push('okk')
  tabNames.push('koo')

  const itemClickHandle = (index, item) => {
    setActiveIndex(index)
    tabClick(item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => (
          <div
            key={item}
            className={classNames('item', { active: index === activeIndex })}
            onClick={e => itemClickHandle(index, item)}
          >
            {item}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs