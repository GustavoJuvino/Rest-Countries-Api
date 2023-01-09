import React from 'react';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';
import { CountriesSection, Country } from './styles/Countries.styled';
import InputSearch from './InputSearch';
import FilterMenu from './FilterMenu';
import { useNavigate } from 'react-router-dom';
import { CountryContext } from './CountryStorage';

const Countries = () => {
  const {data, request} = useFetch();
  const navigate = useNavigate();
  const [country, setCountry] = React.useState("");
  const [continent, setContinent] = React.useState("");

  const [alpha, setAlpha] = React.useState("");

  const {test, setTest} = React.useContext(CountryContext);

  React.useEffect(() => {
    const {options} = GET_INFOS();
    // Default
    request(`https://restcountries.com/v3.1/all`, options);
    // Selecting by filter menu
    if(continent) request(`https://restcountries.com/v3.1/region/${continent}`, options);
    // Selecting by input search
    if(country.length > 0) request(`https://restcountries.com/v3.1/name/${country}`, options);
  }, [test, request, country, continent])

  return (
    <>
      <section className="first-container">
        <InputSearch setCountry={setCountry}/>
        <FilterMenu setContinent={setContinent}/>
      </section>

      {data ? (
        <CountriesSection>
          {data.map((info) => (
            <Country key={info.name.official}>
              <img 
                onClick={({target}) => {
                  setTest(target.alt);
                  navigate('country');
                }}
                src={info.flags.png}
                alt={info.cca2}
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
      
    </>
  )
}

export default Countries;