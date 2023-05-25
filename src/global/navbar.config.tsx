import React from 'react'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
export interface INavBarConfig {
  name: string
  path: string
  icon: JSX.Element
}
const navBarConfig: INavBarConfig[] = [
  {
    name: '首页',
    path: '/home',
    icon: <CottageRoundedIcon />
  },
  {
    name: '关于',
    path: '/about',
    icon: <PersonRoundedIcon />
  }
]

export default navBarConfig
