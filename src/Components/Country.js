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

  return (
    <>
      <BackButton><LeftIcon className="left-icon"/>Back</BackButton>
      <CountryContainer>
        {data ? (
          <img src={data[0].flags.png} alt="teste"/>
        ): null}
        <CountryTexts>
          <ul>
            <li><h1>Belgium</h1></li>
            <li>
              <p>Native Name: <span>Belgie</span></p>
            </li>
            <li>
              <p>Native Name: <span>Belgie</span></p>
            </li>
            <li>
              <p>Native Name: <span>Belgie</span></p>
            </li>
            <li>
              <p>Native Name: <span>Belgie</span></p>
            </li>
            <li>
              <p>Native Name: <span>Belgie</span></p>
            </li>
          </ul>

          <ul className="ul-list-2">
            <li>
              <p>Currencies: <span>Euro</span></p>
            </li>
            <li>
              <p>Currencies: <span>Euro</span></p>
            </li>
            <li>
              <p>Currencies: <span>Euro</span></p>
            </li>
          </ul>

          <nav>
            <p>Border Countries:</p>
            <div>
              <button className='country-link'>France</button>
              <button className='country-link'>France</button>
              <button className='country-link'>France</button>
            </div>
          </nav>
        </CountryTexts>
      </CountryContainer>
    </>
  )
}

export default Country;