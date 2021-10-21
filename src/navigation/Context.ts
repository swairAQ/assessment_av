import React from 'react';

interface IContextProps {

    isLoggedin: () => void;
    newUserSetup: () => void;
}

export const AuthContext = React.createContext({} as IContextProps);
