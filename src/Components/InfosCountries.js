import React from 'react';
import { CountryContext } from './CountryStorage';

const InfosCountries = () => {
  let context = React.useContext(CountryContext);
  
  React.useEffect(() => {
    console.log(context);
  },[context])

  return (
    <div>InfosCountries</div>
  )
}

export default InfosCountries;