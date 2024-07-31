import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLogfor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map(item => (
            <LongforItem key={item.city} itemData={item} />
          ))}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLogfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLogfor