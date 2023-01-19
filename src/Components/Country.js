import React from 'react';
import { BackButton, CountryContainer, CountryTexts} from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';

const Country = () => {
  let {id} = useParams();
  const {data, request} = useFetch();

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v2/alpha/${id}`, options);
  }, [id, request])

  let languages = [];
  if(data) languages = data.languages.map((e) => e.name).join(", ");
  

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
                <p>Languages: <span>{languages}</span></p>
              </li>
            </ul>

            <nav>
              <p>Border Countries</p>
              <div>
                {data.borders && (
                  data.borders.map((name) => (
                    <Link key={name} to={`/country/${name}`}>{name}</Link>
                  ))
                )}
              </div>
            </nav>
          </CountryTexts>
        </CountryContainer>
      ): null}
    </>
  )
}

export default Country;

