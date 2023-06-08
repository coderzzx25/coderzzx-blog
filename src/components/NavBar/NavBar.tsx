import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import NavBarWrapper from './style'
// navBar配置属性类型
import type { INavBarConfig } from '@/global/navbar.config'
// icon
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

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
      <div className={classNames('navBar', { menuItem: isShow })}>
        {config.map((item) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'active item' : 'item'
              }}
              key={item.path}
              to={item.path}
            >
              {item.icon}
              <span className="name">{item.name}</span>
            </NavLink>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
