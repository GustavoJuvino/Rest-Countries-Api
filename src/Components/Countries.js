import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GET_INFOS } from '../api';
import useFetch from '../Hooks/useFetch';
import InputSearch from './InputSearch';
import FilterMenu from './FilterMenu';
import { Container, CountriesSection, Country } from './styles/Countries.styled';

const Countries = () => {
  const [search, setSearch] = React.useState("");
  const [continent, setContinent] = React.useState("");
  const {data, request} = useFetch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state);

  React.useEffect(() => {
    const {options} = GET_INFOS();

    if(search.length > 0) {
      request(`https://restcountries.com/v3.1/name/${search}`, options);
    } else if (continent) {
      request(`https://restcountries.com/v3.1/region/${continent}`, options);
    } else {
      request(`https://restcountries.com/v3.1/all`, options);
    }
  }, [request, search, continent])

  let dark = "var(--very-dark-blue)";
  let light = "var(--white-)";

  return (
    <section style={{backgroundColor: darkMode ? dark : light}}>
      <Container>
        <InputSearch setSearch={setSearch}/>
        <FilterMenu setContinent={setContinent}/>
      </Container>

      {data ? (
        <CountriesSection>
          {data.map((info) => (
            <Country key={info.name.official}>
              <img 
                src={info.flags.png}
                alt={info.cca2}              
                onClick={() => {navigate(`country/${info.cca2}`)}}
              />
              <div className="CountriesTexts">
                <h1
                  key={info.name.common}>
                  {info.name.common}
                </h1>
                <p 
                  key={info.population}>
                  <span>Population: </span>               
                  {info.population.toLocaleString("en-US")}
                </p>
                <p 
                  key={info.region}>
                  <span>Region: </span>
                  {info.region}
                </p>
                <p 
                  key={info.name.nativeName}>
                  <span>Capital: </span>
                  {info.capital}
                </p>
              </div>
            </Country>
        ))}
        </CountriesSection>
      ) : null
    }
      
    </section>
  )
}

export default Countries;