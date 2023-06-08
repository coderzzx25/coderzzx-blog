import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import AppWrapper from './style'
// 组件
import NavBar from '@/components/NavBar/NavBar'

// navbar配置
import navBarConfig from './global/navbar.config'

// 路由
import routes from '@/router/index'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper className="App">
      <NavBar config={navBarConfig} />
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
    </AppWrapper>
  )
}

export default memo(App)
