import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {

  // 进入图片浏览器时不显示滚动条以及相关功能，退出时恢复
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <BrowserWrapper></BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser