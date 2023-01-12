import React from 'react';
import { BackButton, CountrySection, NavLinks, InfosList, InfosList2 } from './styles/Country.styled';
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
    <section>
      <BackButton><LeftIcon className="left-icon"/>Back</BackButton>

      <CountrySection>
        {data ? (
              <img src={data[0].flags.png} alt="teste"/>
        ): null}

          <div>
            <h1>Belgium</h1>
            <InfosList>
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
            </InfosList>

            <NavLinks>
                <p>Border Countries:</p>
                <button className='country-link'>France</button>
                <button className='country-link'>France</button>
                <button className='country-link'>France</button>
            </NavLinks>
          </div>

            <InfosList2>
              <li>
                <p>Currencies: <span>Euro</span></p>
              </li>
              <li>
                <p>Currencies: <span>Euro</span></p>
              </li>
              <li>
                <p>Currencies: <span>Euro</span></p>
              </li>
            </InfosList2>
      </CountrySection>
    </section>
  )
}

export default Country;