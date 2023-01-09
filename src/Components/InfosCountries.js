import React from 'react';
import { CountryContext } from './CountryStorage';

const InfosCountries = () => {
  const {test} = React.useContext(CountryContext);

  React.useEffect(() => {
    if(test) console.log(test)
  },[test])

  return (
    <div>InfosCountries</div>
  )
}

export default InfosCountries;