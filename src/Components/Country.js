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
  if(data) console.log(data[0])

  // Currencies
  let currenciesArray;
  let currency;

  if(data) {
    currenciesArray = Object.entries(data[0].currencies);
    currenciesArray.forEach((a) => currency = a[1].name);
  }

  // Native Name
  let names;
  let arr;
  let name = [];

  if(data) {
    names = data[0].name.nativeName;
    arr = Object.entries(names);
    arr.forEach((a) => name.push(a[1].common));
  }

  // Languages
  let Objlanguages;
  let arrLanguages;
  let languages = [];

  if(data) {
    Objlanguages = data[0].languages;
    arrLanguages = Object.entries(Objlanguages);
    arrLanguages.forEach((a) => languages.push(a[1]));
  }


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
                <span> {data[0].tld[0]} </span>
              </p>
              <p>Currencies: 
                <span> {currency} </span>
              </p>
              <p>Languages: 
                <span> {languages.join(", ")} </span>
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

