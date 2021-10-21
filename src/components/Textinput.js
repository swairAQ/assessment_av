import React, { Component, useEffect, useState } from 'react';

import {
    StyleSheet,
    Image,
    TextInput,
    View,
} from 'react-native';
import { Colors } from '../utilities'

function RegularTextInput(props) {
    const { placeholder, styles, onUpdate, icon, isFocused, containerStyle, isSecure } = props
    const [sText, setText] = useState('');
    const [bFocus, setFocus] = useState(isFocused);

    return (
        <View style={[Styles.container, containerStyle]}>
            <Image source={icon} style={[Styles.iconStyle, { tintColor: bFocus ? Colors.BLUE : Colors.DARK_GREY }]} />
            <TextInput
                value={sText}
                isFocused={bFocus}
                placeholder={placeholder}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                onChangeText={(text) => {
                    setText(text);
                    onUpdate(text)
                }}
                style={[Styles.textInput, styles, { borderBottomColor: bFocus ? Colors.BLUE : Colors.DARK_GREY }]}
            />
            {/* {isSecure &&  <Image source={icon} style={[Styles.iconStyle, { tintColor: bFocus ? Colors.BLUE : Colors.DARK_GREY }]} />} */}

        </View>

    );

}
let icSize = 15;
const Styles = StyleSheet.create({
    container: { marginHorizontal: '7%', },
    iconStyle: { tintColor: Colors.BLUE, height: icSize, width: icSize, position: 'absolute', top: 3, left: 10 },
    textInput: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomWidth: 2,
        borderColor: Colors.SHADOW_GRAY,
        // backgroundColor: 'red',
        paddingLeft: 30,
        // padding: '3%',
        // fontSize: 22, 
        fontWeight: '400'
    },

});

export default RegularTextInput;