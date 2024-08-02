import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  // 进入图片浏览器时不显示滚动条以及相关功能，退出时恢复
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const closeClickHandle = () => {
    if (closeClick) closeClick()
  }

  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="list">{pictureUrls.length}</div>
      <div className="indicator"></div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func
}

export default PictureBrowser