import React from 'react';
import { FilterContainer } from './styles/Filter.styled';
import {ReactComponent as ArrowDown} from '../Assets/expand.svg';

const FilterMenu = ({setContinent}) => {
  const [display, setDisplay] = React.useState("none");
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <FilterContainer>
          <p>Filter by Region
            <ArrowDown 
              className="arrow"
              onClick={() => display === "none" ? setDisplay("block") : setDisplay("none")}
            />
          </p>

          <ul style={{display: display}}>
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