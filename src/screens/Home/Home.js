import React, { useState, useMemo, useEffect } from 'react';
import {
    View, ImageBackground, TouchableOpacity, Image
} from 'react-native';
import Styles from './Styles'
import { Button, RegularText } from '../../components'
import { Strings, Colors, ScreenUtils } from '../../utilities'
export default function Home(props) {
    const { Weather, Employee, Home_welcome } = Strings
    const { container, header, imgBG } = Styles
    const { navigation } = props

    return (
        <View style={container}>
            <View style={header}>
                <ImageBackground
                    source={require('../../assets/images/bg.jpeg')}
                    imageStyle={{ borderBottomRightRadius: 90 }}
                    style={imgBG}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ position: 'absolute', top: 50, right: 15 }}>
                        <Image
                            style={{ height: 27, width: 27, tintColor: Colors.BLUE }}
                            source={require("../../assets/images/settings.png")} />
                    </TouchableOpacity>
                    <RegularText text={Home_welcome} styles={{ marginBottom: '4%', padding: '3%' }} />
                </ImageBackground>

            </View>
            <Button
                onPress={() => { navigation.navigate(ScreenUtils.EMPLOYEE) }}
                text={Employee} />
            <Button
                onPress={() => { navigation.navigate(ScreenUtils.WEATHER) }}

                text={Weather} />
        </View>
    )
}