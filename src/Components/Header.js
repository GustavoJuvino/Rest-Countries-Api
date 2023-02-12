import React from 'react';
import { ReactComponent as DarkMode } from '../Assets/dark-mode.svg';
import { ReactComponent as LightMode } from '../Assets/light-mode.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveDarkMode } from "../store/darkMode";
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
    width: 100vw;
    height: 70px;
    padding: 30px 5% 60px 5%;
    box-shadow: 0px 0px 10px 1px rgba(85, 85, 85, 0.200);
    color: ${(props) => props.color};
    background: ${(props) => props.background};

  .ThemeMode{
    cursor: pointer;
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
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  let dark = "var(--dark-blue)";
  let light = "var(--white-)";

  return (
    <HeaderContainer 
      background={ darkMode ? dark : light }
      color={ darkMode ? light : "black" }
      >
      <ul>
        <li>
          <h2>Where in the world?</h2>
        </li>
        <li 
          className="ThemeMode"
          onClick={() => dispatch(ActiveDarkMode())}>
          { darkMode ? <LightMode/> : <DarkMode/> }
          { darkMode ? <p>Light Mode</p> : <p>Dark Mode</p> }
        </li>
      </ul>
    </HeaderContainer>
  )
}

export default Header