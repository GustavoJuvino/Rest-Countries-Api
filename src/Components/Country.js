import React from 'react';
import { BackButton, CountryContainer, CountryInfos, InfosColumn, NavCountries} from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';

const Country = () => {
  let {id} = useParams();
  const {data, request, error} = useFetch();
  const navigate = useNavigate();

  let {currencies, name, languages} = data ? data[0] : "";

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v3.1/alpha/${id}`, options);
  }, [id, request])
  
  return (
    <>
      <BackButton>
        <LeftIcon className="left-icon"/>
        Back
      </BackButton>
      
    {data ? (
      data.map((info) => (
        <CountryContainer key={info.cioc}>
          <img src={info.flags.svg} alt={info.tld}/>
          <CountryInfos>
            <InfosColumn>
              <h1>{info.name.common}</h1>
              <p>Native name: 
                <span> {Object.values(name.nativeName)
                  .map((name) => name.common)
                  .join(", ")}
                </span>
              </p>
              <p>Population:
                <span> {info.population.toLocaleString("en-US")} </span>
              </p>
              <p>Region: 
                <span> {info.region} </span>
              </p>
              <p>Sub region: 
                <span> {info.subregion} </span>
              </p>
              <p>Capital: 
                <span> {info.capital} </span>
              </p>
            </InfosColumn>

            <InfosColumn className='infos-column-2'>
              <p>Top Level Domain: 
                <span> {data[0].tld[0]} </span>
              </p>
              <p>Currencies: 
                <span> {Object.values(currencies)[0].name} </span>
              </p>
              <p>Languages: 
                <span> {Object.values(languages).join(", ")} </span>
              </p>
        </InfosColumn>

        <NavCountries>
              <p>Border Countries:</p>
              <div>
                {data[0].borders && (
                  data[0].borders.splice(0, 4).map((name) => (
                    <button 
                      key={name}
                      onClick={() => {navigate(`/country/${name}`)}}>
                      {name}
                    </button>
                    ))
                  )}
              </div>
            </NavCountries>
          </CountryInfos>
        </CountryContainer>
      ))
    ): null}

    {error ? (<h1>{error}</h1>) : null}
    </>
  )
}

export default Country;

