import React from 'react';
import Header from './Components/Header';
import './App.css';
import Countries from './Components/Countries';
import Country from './Components/Country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path='country/:id' element={<Country/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;