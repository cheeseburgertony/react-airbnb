import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footData.map(item => (
            <div key={item.name} className="item">
              <div className="name">{item.name}</div>
              <div className="list">
                {item.list.map(item => (
                  <div key={item} className="list-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter