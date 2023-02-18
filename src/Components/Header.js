import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveDarkMode } from "../store/darkMode";
import { ReactComponent as DarkMode } from '../Assets/dark-mode.svg';
import { ReactComponent as LightMode } from '../Assets/light-mode.svg';
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
    box-shadow: 0px 0px 20px 0px rgba(7, 7, 7, 0.20);
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

const Header = ({dark, light}) => {
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  const body = document.querySelector("body");
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  
  let bodyColor;
  let fontColor;
  
  if(darkMode) {
      bodyColor = "var(--very-dark-blue-2)";
      fontColor = "var(--white-)";
  } else {
      bodyColor = "var(--very-light-gray)";
      fontColor = "black";
  }

  body.style.background = bodyColor;
  body.style.color = fontColor;

  return (
    <HeaderContainer  background={ darkMode ? dark : light }>
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

export default Header;