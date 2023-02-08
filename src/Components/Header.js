import React from 'react';
import { ReactComponent as DarkMode } from '../Assets/dark-mode.svg';
import styled from "styled-components";

const HeaderContainer = styled.nav`
  @media (max-width: 450px) {
    h2 {
      font-size: 18px;
    }

    p {
      display: none;
    }
    
      }
    ul{
      display: flex;
      justify-content: space-between;
      padding: 30px 5% 60px 5%;
      height: 70px;
      width: 100vw;
      box-shadow: 0px 0px 10px 1px rgba(85, 85, 85, 0.200);

    .DarkMode{
        display: flex;

        p{
          font-size: 16px;
          font-weight: 600;
          margin: 4px 0px 0px 5px;
        }
    }
  }
`

const Header = () => {
  
  return (
    <HeaderContainer>
      <ul>
        <li>
          <h2>Where in the world?</h2>
        </li>
        <li className="DarkMode">
          <DarkMode/>
          <p>Dark Mode</p>
        </li>
      </ul>
    </HeaderContainer>
  )
}

export default Header