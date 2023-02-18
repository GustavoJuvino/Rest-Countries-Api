import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from './Components/Header';
import Countries from './Components/Countries';
import Country from './Components/Country';
import './App.css';

const darkBlue = "var(--dark-blue)";
const lightColor = "var(--white-)";
const blackShadow = "0px 0px 20px 0px rgba(7, 7, 7, 0.30)";
const lightShadow = "0px 0px 10px 0px rgba(85, 85, 85, 0.200)";

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Header dark={ darkBlue } light={ lightColor }/>
        <Routes>
          <Route path='/' element={ 
            <Countries 
              dark={ darkBlue }
              light={ lightColor }
              blackShadow = { blackShadow }
              lightShadow = { lightShadow }
            />
          }/>
          <Route path='country/:id' element={<Country/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;