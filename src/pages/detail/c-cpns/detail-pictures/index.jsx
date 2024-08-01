import React, { memo } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map(item => (
            <div key={item} className="item">
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="show-btn">显示照片</div>
    </PicturesWrapper>
  )
})

export default DetailPictures