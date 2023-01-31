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

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v3.1/alpha/${id}`, options);
  }, [id, request])

  // Testing
  // let languages = [];
  // if(data) languages = data.languages.map((e) => e.name).join(", ");


  let objNames;
  let objCurrency;
  let objLanguages;


  function test(value){
    return Object.entries(value);
  }

  if(data) objNames = test(data[0].name.nativeName);
  if(data) console.log(objNames);

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
                {/* <span> {name.join(", ")}</span> */}
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
                {/* <span> {currency} </span> */}
              </p>
              <p>Languages: 
                {/* <span> {languages.join(", ")} </span> */}
              </p>
        </InfosColumn>
          </CountryInfos>
        </CountryContainer>
      ))
    ): null}

    {error ? (<h1>{error}</h1>) : null}
    </>
  )
}

export default Country;

