import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ContentListWrapper from './style'

import ContentCard from '../ContentCard/ContentCard'

interface IProps {
  children?: ReactNode
  data: any[]
}

const ContentList: FC<IProps> = (props) => {
  const { data } = props
  return (
    <ContentListWrapper>
      {data.map((item) => {
        return <ContentCard info={item} key={item.id} />
      })}
    </ContentListWrapper>
  )
}

export default memo(ContentList)
