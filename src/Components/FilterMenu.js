import React from 'react';
import { FilterContainer } from './styles/Filter.styled';
import {ReactComponent as ArrowDown} from '../Assets/expand.svg';

const FilterMenu = ({setContinent}) => {
  const [display, setDisplay] = React.useState("none");

  // Click outside menu
  let filterSection = React.useRef();

  React.useEffect(() => {
    if(filterSection){
        let handler = (e) => {
          if(!filterSection.current.contains(e.target)){
            setDisplay("none");
            document.removeEventListener("click", handler);
          }
        }
        document.addEventListener("click", handler);
    }
  },[display])

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <FilterContainer ref={filterSection}>
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