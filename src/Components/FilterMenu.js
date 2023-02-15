import React from 'react';
import { useSelector } from 'react-redux';
import {ReactComponent as ArrowDown} from '../Assets/expand.svg';
import styled, { keyframes } from "styled-components";

const FilterMenu = ({setContinent}) => {
  const [display, setDisplay] = React.useState("none");
  const { darkMode } = useSelector((state) => state);
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const dropingMenu = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: initial;
        transform: translateY(0px);
    }
  `

  const  FilterContainer = styled.section`
    margin-top: 50px;
    height: auto;
    border-radius: 5px;
    background-color: ${(props) => props.background};
  
    & p {
      display: flex;
      width: 220px;
      height: 50px;
      font-weight: 600;
      font-size: 14px;
      padding: 14px 0px 0px 20px;
      border-radius: 3px;
      box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
    }

    & .arrow {
      display: inline-block;
      margin: 5px 0px 0px 55px;
      cursor: pointer;
      transform: rotate(180deg);

      path{
        fill: ${(props) => props.fill};
      }
    }
  
    & ul{
      display: ${ display };
      position: absolute;
      background-color: ${(props) => props.background};
      z-index: 2;
      width: 220px;
      height: 160px;
      margin-top: 10px;
      padding: 15px 0px 0px 25px;
      border-radius: 3px;
      box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
      animation: ${dropingMenu} 0.3s forwards;

      & li {
          position: inherite;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 5px;
          width: 80px;
      }
    }

`
  return (
    <FilterContainer 
      background={ darkMode ? "var(--dark-blue)" : "white" }
      fill={ darkMode ? "white" : "black"}>

      <p>Filter by Region
        <ArrowDown className="arrow"
          onClick={() => display === "none" ? setDisplay("block") : setDisplay("none")}/>
      </p>
      
      <ul>
        {continents.map((continent) => (
          <li key={continent} onClick={(event) => setContinent(event.target.innerText)}>
            {continent}
          </li>
        ))}
      </ul>
    </FilterContainer>    
  )
}

export default FilterMenu;