import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Colors } from '../utilities'

function RegularTextView(props) {

    return (
        <Text
            style={[styles.textView, props.styles]}>
            {props.text}
        </Text>

    );

}

const styles = StyleSheet.create({
    textView: {
        padding: '3%',

        fontSize: 22, color: Colors.WHITE, fontWeight: '400'
    },

});

export default RegularTextView;