import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkMode from './darkMode';

const reducer = combineReducers({ darkMode });
const store = configureStore({ reducer });

export default store;