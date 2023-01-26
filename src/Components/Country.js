import React from 'react';
import { BackButton, CountryContainer, CountryInfos, InfosColumn, NavCountries} from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';

const Country = () => {
  let {id} = useParams();
  const {data, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v2/alpha/${id}`, options);
  }, [id, request])

  let languages = [];
  if(data) languages = data.languages.map((e) => e.name).join(", ");

  return (
    <>
      <BackButton>
        <LeftIcon className="left-icon"/>
        Back
      </BackButton>
      
      {data ? (
        <CountryContainer>
          <img src={data.flags.svg} alt={data.alpha3Code}/>
          <CountryInfos>
            <InfosColumn>
              <h1>{data.name}</h1>
              <p>Native name: 
                <span> {data.nativeName} </span>
              </p>
              <p>Population: 
                <span> {data.population.toLocaleString("en-US")} </span>
              </p>
              <p>Region: 
                <span> {data.region} </span>
              </p>
              <p>Sub region: 
                <span> {data.subregion} </span>
                </p>
              <p>Capital: 
                <span> {data.capital} </span>
              </p>
            </InfosColumn>

            <InfosColumn className='infos-column-2'>
              <p>Top Level Domain: 
                <span> {data.topLevelDomain} </span>
              </p>
              <p>Currencies: 
                <span> {data.currencies[0].name} </span>
              </p>
              <p>Languages: 
                <span> {languages} </span>
              </p>
            </InfosColumn>

            <NavCountries>
              <p>Border Countries:</p>
              <div>
                {data.borders && (
                  data.borders.splice(0, 4).map((name) => (
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
      ): null}
    </>
  )
}

export default Country;

