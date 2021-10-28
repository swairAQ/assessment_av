import React from 'react';

interface IContextProps {

    isLoggedin: () => void;
    newUserSetup: () => void;
    changeLanguageSetup: () => void;
}

export const AuthContext = React.createContext({} as IContextProps);
