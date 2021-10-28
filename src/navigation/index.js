import React, { useState, useMemo, useEffect } from 'react';
import HomeStack from './HomeStack'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './Context';
import RegistrationStack from './RegistrationStack';
import { changeLanugae } from '../utilities/Strings';
import { LocalStorage } from '../utilities';

const RootNavigator = () => {
    const [bSetupCompleted, setSetupStatus] = useState(false);
    useEffect(() => {
        getStatus()

    }, []);
    async function getStatus() {

        let isLoggedin = await LocalStorage.getValue('isLoggedin');

        console.log("get saved value" + isLoggedin)
        setSetupStatus(isLoggedin)

    }
    const authContext = useMemo(() => {
        return {
            isLoggedin: async () => {
                console.log("saved")
                setSetupStatus(true);
                LocalStorage.setValue('isLoggedin', true)
            },
            newUserSetup: async () => {
                console.log("erased")
                setSetupStatus(false);
                LocalStorage.setValue('isLoggedin', true)
            },
            changeLanguageSetup: async (lang) => {
                changeLanugae(lang)
            }
        }
    })
    console.log("res " + bSetupCompleted)
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