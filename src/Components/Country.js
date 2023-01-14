import React from 'react';
import { BackButton, CountryContainer, CountryTexts} from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_INFOS } from '../api';

const Country = () => {
  const {id} = useParams();
  const {data, request} = useFetch();

  React.useEffect(() => {
    const {options} = GET_INFOS();
    request(`https://restcountries.com/v3.1/alpha/${id}`, options);
  }, [id, request])

  if(data) console.log(data[0].name.nativeName)

  return (
    <>
      <BackButton><LeftIcon className="left-icon"/>Back</BackButton>

      {data ? data.map((info) => (
        <CountryContainer key={info.altSpellings[0]}>
          <img src={info.flags.png} alt={info.cca3} key={info.cca3}/>
          <CountryTexts>
            <ul>
              <li><h1 key={info.name.common}>{info.name.common}</h1></li>
              <li>
                <p>Native name: {info.name.nld}</p>
              </li>
            </ul>
          </CountryTexts>
        </CountryContainer>
      )) : null}
    </>
  )
}

export default Country;

