import * as React from 'react';
import {

    View,
    StatusBar,
} from 'react-native';

import Navigator from './navigation'
const Provider = require('react-redux').Provider;
import { store } from './redux/store/MainStore';



function ReduxApp() {
    // return <View></View>
    return (
        <Provider store={store}>

            <View style={{ flex: 1 }}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <Navigator />
            </View>

        </Provider>
    );



}
export default ReduxApp;