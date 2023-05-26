import styled from 'styled-components'

const HomeBgWrapper = styled.div`
  position: relative;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 850px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

export default HomeBgWrapper
