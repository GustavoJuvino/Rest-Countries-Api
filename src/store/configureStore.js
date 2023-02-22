import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkMode from './darkMode';
import localStorage from './middleware/localStorage';

const reducer = combineReducers({ darkMode });
const store = configureStore({reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage)});

export default store;