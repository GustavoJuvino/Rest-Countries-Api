import React from 'react';
import { BackButton, CountryContainer, CountryInfos, CountryInfosColumn1, CountryInfosColumn2} from './styles/Country.styled';
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
      <BackButton><LeftIcon className="left-icon"/>Back</BackButton>
      {data ? (
        <CountryContainer>
          <img src={data.flags.svg} alt={data.alpha3Code}/>
          <CountryInfos>

            <CountryInfosColumn1>
              <h1>{data.name}</h1>
              <p>Native name: 
                <span>{data.nativeName}</span>
              </p>
              <p>Population: 
                <span>{data.population}</span>
              </p>
              <p>Region: 
                <span>{data.region}</span>
              </p>
              <p>Sub region: 
                <span>{data.subregion}</span>
                </p>
              <p>Capital: 
                <span>{data.capital}</span>
              </p>
            </CountryInfosColumn1>

            <CountryInfosColumn2>
                  <p>Top Level Domain: <span>{data.topLevelDomain}</span></p>
                  <p>Currencies: <span>{data.currencies[0].code}</span></p>
                  <p>Languages: <span>{languages}</span></p>
              </CountryInfosColumn2>

              <nav>
              <p>Border Countries</p>
              <div>
                {data.borders && (
                  data.borders.splice(0, 4).map((name) => (
                    // <Link className="testing" key={name} to={`/country/${name}`}>{name}</Link>

                    <button onClick={() => {navigate(`/country/${name}`)}} key={name}>
                      {name}
                    </button>
                    ))
                  )}
              </div>
            </nav>
          </CountryInfos>
        </CountryContainer>
      ): null}
    </>
  )
}

export default Country;

