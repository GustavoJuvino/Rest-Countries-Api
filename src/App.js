import React from 'react';
import Header from './Components/Header';
import './App.css';
import Countries from './Components/Countries';
import InfosCountries from './Components/InfosCountries';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path='country' element={<InfosCountries/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;