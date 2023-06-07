import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import ContentCardWrapper from './style'

import ClassRoundedIcon from '@mui/icons-material/ClassRounded'

interface IProps {
  children?: ReactNode
  info: any
}

const ContentCard: FC<IProps> = (props) => {
  const { info } = props
  return (
    <ContentCardWrapper>
      <h2>{info.title}</h2>
      <span className="time">
        <ClassRoundedIcon />
        干货 {info.time}
      </span>
      <img src={info.img} alt="" />
      <p>{info.content}</p>
    </ContentCardWrapper>
  )
}

export default memo(ContentCard)
