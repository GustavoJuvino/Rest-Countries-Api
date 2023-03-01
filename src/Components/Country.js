import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';
import { useSelector } from 'react-redux';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import Head from './Head';
import { 
  BackButton,
  CountryContainer,
  CountryInfos,
  InfosColumn,
  NavCountries
} from './styles/Country.styled';


const Country = () => {
  let { id } = useParams();
  const {data, request, error} = useFetch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state);

  let {currencies, name, languages} = data ? data[0] : "";

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v3.1/alpha/${id}`, options);
  }, [id, request])

  return (
    <>
      <Head title={ data ? data[0].name.common : ""}/>
      <BackButton 
        color={ darkMode ? "white" : "black" }
        onClick={() => { navigate(`/`) }}
      >
        <LeftIcon className="left-icon"/>
        Back
      </BackButton>
      
      {data ? (
        data.map((info) => (
        <CountryContainer key={info.cca2}>
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
              {data[0].tld ? (              
                <p>Top Level Domain: 
                  <span> {data[0].tld[0]} </span>
                </p> 
              ): ""}
              <p>Currencies: 
                <span> {Object.values(currencies)[0].name} </span>
              </p>
              <p>Languages: 
                <span> {Object.values(languages).join(", ")} </span>
              </p>
            </InfosColumn>

            {data[0].borders && (
              <NavCountries color={ darkMode ? "white" : "black" }>
                <p>Border Countries:</p>
                <div>
                {data[0].borders.slice(0,4).map((name) => (
                  <button 
                    key={name}
                    onClick={() => {navigate(`/country/${name}`)}}>
                    {name}
                  </button>
                ))}
                </div>
              </NavCountries>
            )}
          </CountryInfos>
        </CountryContainer>
        ))
      ): null}

      {error ? navigate("*") : null}
    </>
  )
}

export default Country;

