import React from 'react';

export const CountryContext = React.createContext();

export const CountryStorage = ({ children }) => {
    return <CountryContext.Provider value={"teste"}>{children}</CountryContext.Provider>
}
