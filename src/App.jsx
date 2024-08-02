import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useScrollTop } from './hooks'

const App = memo(() => {
  // 切换页面时自动滚到顶部
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App