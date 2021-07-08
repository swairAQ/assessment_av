import React, { useState, useMemo, useEffect } from 'react';
import HomeStack from './HomeStack'
import { NavigationContainer } from '@react-navigation/native';
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <HomeStack />

        </NavigationContainer>
    )
}
export default RootNavigator;