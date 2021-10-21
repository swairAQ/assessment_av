import React, { useState, useMemo, useEffect } from 'react';
import HomeStack from './HomeStack'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './Context';
import RegistrationStack from './RegistrationStack';

const RootNavigator = () => {
    const [bSetupCompleted, setSetupStatus] = useState(false);
    useEffect(() => {
        getStatus()

    }, []);
    async function getStatus() {
        let isLoggedin = await LocalStorage.getValue('isLoggedin');
        setSetupStatus(isLoggedin)

    }
    const authContext = useMemo(() => {
        return {
            isLoggedin: async () => {
                setSetupStatus(true);
                localStorage.setItem('isLoggedin', true)
            },
            newUserSetup: async () => {
                setSetupStatus(false);
                localStorage.setItem('isLoggedin', false)
            },
        }
    })
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {bSetupCompleted ?
                    <HomeStack />
                    :
                    <RegistrationStack />
                }

            </NavigationContainer>
        </AuthContext.Provider>
    )
}
export default RootNavigator;