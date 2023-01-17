import React from 'react';
import { BackButton, CountryContainer, CountryTexts} from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';

const Country = () => {
  const {id} = useParams();
  const {data, request} = useFetch();

  // Check this
  // https://restcountries.com/v2/name/belgium
  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v2/alpha//${id}`, options);
  }, [id, request])

  // if(data) data.languages.forEach(element => {
  //     	console.log(element.name)
  // });

  return (
    <>
      <BackButton><LeftIcon className="left-icon"/>Back</BackButton>
      {data ? (
        <CountryContainer>
          <img src={data.flags.svg} alt={data.alpha3Code}/>
          <CountryTexts>
            <ul>
              <li>
                <h1>{data.name}</h1>
              </li>
              <li>
                <p>Native name: <span>{data.nativeName}</span></p>
              </li>
              <li>
                <p>Population: <span>{data.population}</span></p>
              </li>
              <li>
                <p>Region: <span>{data.region}</span></p>
              </li>
              <li>
                <p>Sub region: <span>{data.subregion}</span></p>
              </li>
              <li>
                <p>Capital: <span>{data.capital}</span></p>
              </li>
            </ul>

            <ul className="ul-list-2">
              <li>
                <p>Top Level Domain: <span>{data.topLevelDomain}</span></p>
              </li>
              <li>
                <p>Currencies: <span>{data.currencies[0].code}</span></p>
              </li>
              <li>
                <p>Languages: {data.languages.map((e) => (<span key={e.name}>{`${e.name} `}</span>))}</p>
              </li>
            </ul>
          </CountryTexts>
        </CountryContainer>
      ): null}
    </>
  )
}

export default Country;

