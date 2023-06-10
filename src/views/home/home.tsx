import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 背景图
import bg from '@/assets/img/bg.jpg'
import info from '@/global/bg.config'

// 组件
import HomeBg from '@/components/HomeBg/HomeBg'
import ContentList from '@/components/ContentList/ContentList'

// 数据
import data from '@/global/test.data'
import { Pagination } from '@mui/material'

interface IProps {
  children?: ReactNode
}

const home: FC<IProps> = () => {
  return (
    <div>
      <HomeBg img={bg} info={info} />
      <ContentList data={data} />
      <Pagination className="pagination" count={10} />
    </div>
  )
}

export default memo(home)
