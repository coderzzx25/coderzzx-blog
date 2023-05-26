import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeBgWrapper from './style'

import type { IInfo } from '@/global/bg.config'
interface IProps {
  children?: ReactNode
  img: string
  info: IInfo
}

const HomeBg: FC<IProps> = (props) => {
  const { img, info } = props
  return (
    <HomeBgWrapper>
      <img src={img} alt="bg" />
      <div className="info">
        {info.name && <h1>{info.name}</h1>}
        {info.title && <p>{info.title}</p>}
      </div>
    </HomeBgWrapper>
  )
}

export default memo(HomeBg)
