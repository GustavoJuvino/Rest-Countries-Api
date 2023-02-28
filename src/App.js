import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from './Components/Header';
import Countries from './Components/Countries';
import Country from './Components/Country';
import Page404 from './Components/Page404';
import './App.css';

const darkBlue = "var(--dark-blue)";
const lightColor = "var(--white-)";

const App = () => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Header dark={ darkBlue } light={ lightColor }/>
        <Routes>
          <Route 
            path='/'
            element={ 
              <Countries dark={ darkBlue } light={ lightColor }/>
            }
          />
          <Route path='country/:id' element={ <Country/> }/>
          <Route path='*' element={ <Page404/> }/>
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App;