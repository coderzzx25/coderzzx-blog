import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import NavBarWrapper from './style'
// navBar配置属性类型
import type { INavBarConfig } from '@/global/navbar.config'
// icon
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'

interface IProps {
  children?: ReactNode
  config: INavBarConfig[]
}

const NavBar: FC<IProps> = (props) => {
  const [isShow, setIsShow] = useState(false)
  const { config } = props
  return (
    <NavBarWrapper>
      <h1>CODERZZX</h1>
      <div className="menu" onClick={() => setIsShow(!isShow)}>
        {isShow ? <ClearIcon /> : <MenuIcon />}
      </div>
      <div className={isShow ? 'navBar active' : 'navBar'}>
        {config.map((item) => {
          return (
            <div className="item" key={item.path}>
              {item.icon}
              <span className="name">{item.name}</span>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
