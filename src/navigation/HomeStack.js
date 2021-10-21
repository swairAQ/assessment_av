import React, { FC } from 'react';
import { Home, Employee, Weather, Login } from '../screens';
import { ScreenUtils } from '../utilities';
import { createStackNavigator } from '@react-navigation/stack';

const { HOME, WEATHER, EMPLOYEE, LOGIN } = ScreenUtils;
const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
    return (
        <Navigator
            // initialRouteName={EMPLOYEE}
            screenOptions={{ headerShown: false }}>
            {/* <Screen name={LOGIN} component={Login} /> */}
            <Screen name={HOME} component={Home} />
            <Screen name={WEATHER} component={Weather} />
            <Screen name={EMPLOYEE} component={Employee} />
        </Navigator>
    );
};

export default HomeStack;

