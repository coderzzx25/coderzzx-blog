import styled from 'styled-components'

const NavBarWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  position: fixed;
  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    cursor: pointer;
  }
  .menu {
    display: none;
  }
  .navBar {
    display: flex;
    align-items: center;
  }
  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 0.5rem;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .name {
    padding: 0 0.2rem;
  }

  @media screen and (max-width: 850px) {
    h1 {
      font-size: 1rem;
    }
    .menu {
      display: block;
      font-size: 1.5rem;
      margin: 0 0.5rem;
      cursor: pointer;
    }
    .navBar {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      top: -100%;
      left: 0;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .active {
      top: 100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`

export default NavBarWrapper
