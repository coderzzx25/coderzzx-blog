import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
// 组件
import NavBar from '@/components/NavBar/NavBar'
// navbar配置
import navBarConfig from './global/navbar.config'
import HomeBg from '@/components/HomeBg/HomeBg'
// 背景图
import bg from '@/assets/img/bg.jpg'
import info from '@/global/bg.config'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div className="App">
      <NavBar config={navBarConfig} />
      <HomeBg img={bg} info={info} />
    </div>
  )
}

export default memo(App)
