import React from 'react';
import { CountryContext } from './CountryStorage';
import { useNavigate,useLocation} from "react-router-dom";

const InfosCountries = () => {
  const {test} = React.useContext(CountryContext);
  const [value, setValue] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!test) navigate("/");
  },[test, navigate])

  // const valor = React.useMemo(() => {
  //   // só será executado uma vez
  //   return console.log(test);
  // }, [test]);


  return (
    <div>
    </div>
    
  )
}

export default InfosCountries;