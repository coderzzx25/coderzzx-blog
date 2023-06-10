import { styled } from 'styled-components'

const ContentCardWrapper = styled.div`
  margin: 20px 0;
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
    // 超过一行显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }
  svg {
    font-size: 0.7rem;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px 0;
  }
  p {
    margin: 0;
    // 超过五行显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`

export default ContentCardWrapper
