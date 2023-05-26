import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ContentListWrapper from './style'
import ClassRoundedIcon from '@mui/icons-material/ClassRounded'

import bg from '@/assets/img/bg.jpg'

interface IProps {
  children?: ReactNode
}

const ContentList: FC<IProps> = () => {
  return (
    <ContentListWrapper>
      <div className="card">
        <h2>AI Claude使用教程，据说是对标ChatGpt的11111111111111111111</h2>
        <span className="time">
          <ClassRoundedIcon />
          干货 2023-05-10 22:05:48
        </span>
        <img src={bg} alt="" />
        <p>
          今天这篇博文就教大家如何直接跳过申请门栏，直接使用 Claude AI ！首先我们要注册一个叫做
          slack 网站，（slack是一款企业内部通信
          Collaboration工具,它可以用于团队内部的频繁交流与协作。com/intl/zh-cn/ 注册地址)
          注册并登陆成功后，我们在slack上创立一个工作区就可以了。接着我们进入slack这个应用网站，
          [https://w1681953053-qja238503.tab=more_info) 这个就是Claude AI 在slack上的应用位置，点击
          《在Slack中打开》 这个选项就可以了11111111111111111111111111111。
        </p>
      </div>
    </ContentListWrapper>
  )
}

export default memo(ContentList)
