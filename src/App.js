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

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Header dark={ darkBlue } light={ lightColor }/>
        <Routes>
          <Route path='/' element={ 
            <Countries dark={ darkBlue } light={ lightColor } />
            }/>
          <Route path='country/:id' element={<Country/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;