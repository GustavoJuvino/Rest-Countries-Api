import React from 'react';
import { useParams } from 'react-router-dom';

const InfosCountries = () => {
  const {id} = useParams();
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
    .then((r) => r.json())
    .then((data) => {
      if (data !== undefined) {
        setData(data)
      } else{
        alert("Can't Load Data")
      }
    })
  }, [data, id]);


  return (
    <div>
      <h1>
        {data ? data[0].name.common : null}
      </h1>
    </div>
    
  )
}

export default InfosCountries;