import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Rating } from '@mui/material'

import { ItemWrapper } from './style'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props

  const sliderRef = useRef()

  const controlClickHandle = (isRight = true) => {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
  }

  return (
    <ItemWrapper
      verifyColor={itemData.verify_info.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="slider">
          <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData?.picture_urls?.map(item => (
              <div key={item} className="cover">
                <img src={item} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info?.content && <span className="extra">·{itemData.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem