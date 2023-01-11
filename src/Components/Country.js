import React from 'react';
import { BackButton, CountrySection } from './styles/Country.styled';
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

          <ul>
            <li><h1>Belgium</h1></li>
            <li>Native Name: <span>Belgie</span></li>
            <li>Native Name: <span>Belgie</span></li>
            <li>Native Name: <span>Belgie</span></li>
            <li>Native Name: <span>Belgie</span></li>
            <li>Native Name: <span>Belgie</span></li>
          </ul>

          <ul>
            <li>Currencies: <span>Euro</span></li>
            <li>Currencies: <span>Euro</span></li>
            <li>Currencies: <span>Euro</span></li>
          </ul>

          <nav>
              <button>France</button>
              <button>France</button>
              <button>France</button>
            </nav>
      </CountrySection>
    </section>
    
  )
}

export default Country;