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
    request(`https://restcountries.com/v3.1/alpha/${id}`, options);
  }, [id, request])

  // let languages = [];
  // if(data) languages = data.languages.map((e) => e.name).join(", ");

  // testing
  const languagesTest = {
    "EUR": {
      "name": "Euro",
      "symbol": "€"
    }
  }

  // arr.forEach((a) => console.log(a[1].common))

  let names;
  let arr;
  let name = [];

  if(data) {
    names = data[0].name.nativeName;
    arr = Object.entries(names);
    arr.forEach((a) => name.push(a[1].common));
  }

  // if(data) console.log(data[0].currencies)


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
                <span> {name.join(", ")}</span>
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
                <span> {data.topLevelDomain} </span>
              </p>
              <p>Currencies: 
                {/* <span> {info.currencies[0].name} </span> */}
              </p>
              <p>Languages: 
                {/* <span> {languages} </span> */}
              </p>
        </InfosColumn>
          </CountryInfos>
        </CountryContainer>
      ))
    ): null}
    </>
  )
}

export default Country;

