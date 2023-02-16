import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../Assets/search.svg';
import styled from "styled-components";

const SearchDiv = styled.div`

@media (max-width: 1020px) {
    margin-top: 0px;
}

width: max( 300px, 30%);
height: 50px;
margin-top: 50px;
box-shadow: 0px 0px 20px 0px rgba(7, 7, 7, 0.30);
border-radius: 5px;
background-color: ${(props) => props.background};

& input {
  border: none;
  width: 80%;
  height: 25px;
  font-size: 14px;
  position: relative;
  background-color: transparent;
  margin: 14px 0px 0px 10px;
  color: ${(props) => props.color};
  outline: none !important;
}

& .SearchIcon {
    margin-left: 20px;
    padding-top: 4px;

  path {
    fill: ${(props) => props.color};
  }
}

`

const InputSearch = ({ setSearch }) => {
  const { darkMode } = useSelector((state) => state);

  return (
    <SearchDiv 
      background={ darkMode ? "var(--dark-blue)" : "white" }
      color={ darkMode ? "white" : "black" }
    >  
      <SearchIcon className='SearchIcon'/>
      <input 
        type="text" 
        placeholder="Search for a country..."
        onChange={ (event) => setTimeout(() => setSearch(event.target.value), 1200)}
      />
    </SearchDiv>
  )
}

export default InputSearch;
