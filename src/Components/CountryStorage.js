import React from 'react';

export const CountryContext = React.createContext();

export const CountryStorage = ({ children }) => {

    const [test, setTest] = React.useState()

    return <CountryContext.Provider value={{test, setTest}}>{children}</CountryContext.Provider>
}
