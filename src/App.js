import React from 'react';
import Header from './Components/Header';
import './App.css';
import Countries from './Components/Countries';
import Country from './Components/Country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryStorage } from './Components/CountryStorage';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <CountryStorage>
        <Routes>
          <Route path='/' element={<Countries/>}/>
          <Route path='country/:id' element={<Country/>}/>
        </Routes>
      </CountryStorage>
    </BrowserRouter>
  )
}

export default App;