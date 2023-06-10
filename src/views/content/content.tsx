import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const content: FC<IProps> = () => {
  return <div>content</div>
}

export default memo(content)
