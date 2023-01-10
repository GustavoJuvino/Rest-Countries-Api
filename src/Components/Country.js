import React from 'react';
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

//   <h1>
//   {data ? data[0].name.common : null}
// </h1>

  return (
    <section>
      <button>Back</button>

      <div>
        {data ? (
              <img src={data[0].flags.png} alt="teste"/>
        ): null}
        <div className='CountryInfos'>
          <h1>Belgium</h1>

          <ul>
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

        </div>
      </div>
    </section>
    
  )
}

export default Country;