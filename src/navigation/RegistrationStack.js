import React, { FC } from 'react';
import { Home, Employee, Weather, Login } from '../screens';
import { ScreenUtils } from '../utilities';
import { createStackNavigator } from '@react-navigation/stack';

const { HOME, WEATHER, EMPLOYEE, LOGIN } = ScreenUtils;
const { Navigator, Screen } = createStackNavigator();

const RegistrationStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={LOGIN} component={Login} />
        </Navigator>
    );
};

export default RegistrationStack;

