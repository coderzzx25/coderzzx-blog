import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import AppWrapper from './style'
// 组件
import NavBar from '@/components/NavBar/NavBar'
import HomeBg from '@/components/HomeBg/HomeBg'
import ContentList from '@/components/ContentList/ContentList'
// navbar配置
import navBarConfig from './global/navbar.config'
// 背景图
import bg from '@/assets/img/bg.jpg'
import info from '@/global/bg.config'
// 数据
import data from '@/global/test.data'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper className="App">
      <NavBar config={navBarConfig} />
      <HomeBg img={bg} info={info} />
      <ContentList data={data} />
    </AppWrapper>
  )
}

export default memo(App)
