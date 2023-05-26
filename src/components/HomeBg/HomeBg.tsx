import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeBgWrapper from './style'

interface IProps {
  children?: ReactNode
  img: string
}

const HomeBg: FC<IProps> = (props) => {
  const { img } = props
  return (
    <HomeBgWrapper>
      <img src={img} alt="bg" />
    </HomeBgWrapper>
  )
}

export default memo(HomeBg)
