import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    const windowClickHandle = () => {
      setShowPanel(false)
    }
    // 对窗口点击进行监听,并且使用捕获防止使用冒泡出现问题
    window.addEventListener('click', windowClickHandle, true)
    // 卸载组件时移除监听
    return () => {
      window.removeEventListener('click', windowClickHandle, true)
    }
  })

  // 事件处理函数
  const profileClickHandle = () => {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="panel-top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="panel-bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight