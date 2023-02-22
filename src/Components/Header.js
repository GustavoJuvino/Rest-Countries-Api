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
    width: 100%;
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

  function activateDark() {
    dispatch(ActiveDarkMode());

    if(!darkMode) localStorage.setItem("darkTheme", true);
    else localStorage.removeItem("darkTheme");
  }

  const local = localStorage.getItem("darkTheme");

  React.useEffect(() => {
    if(local && !darkMode) dispatch(ActiveDarkMode());
  },[local, dispatch, darkMode])

  // Body Background
  const body = document.querySelector("body");

  darkMode ? body.classList.add("darkBody") : body.classList.remove("darkBody")

  return (
    <HeaderContainer background={ darkMode ? dark : light }>
      <ul>
        <li>
          <h2>Where in the world?</h2>
        </li>
        <li 
          className="ThemeMode"
          onClick={() => activateDark()}
        >
          { local && dark  ? <LightMode/> : <DarkMode/> }
          { local && dark  ? <p>Light Mode</p> : <p>Dark Mode</p> }
        </li>
      </ul>
    </HeaderContainer>
  )
}

export default Header;