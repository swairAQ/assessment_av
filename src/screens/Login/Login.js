import React, { useState, useMemo, useEffect, useContext } from 'react';
import {
    View, Image, Platform
} from 'react-native';
import Styles from './Styles'
import { Button, RegularText, RegularTextInput } from '../../components'
import { Strings, Colors, ScreenUtils } from '../../utilities'
import { AuthContext } from '../../navigation/Context';
const icSize = 500;
export default function Login(props) {
    const { Login, Username, Password } = Strings
    const { container, header, cardContainer } = Styles
    const { navigation } = props
    const { isLoggedin } = useContext(AuthContext)
    const [sUserName, setUsername] = useState('')
    const [sPassword, setPassword] = useState('')

    return (
        <View style={container}>

            <Image

                style={{ alignSelf: 'center', marginTop: 40, marginRight: 10 }}
                source={require("../../assets/images/BE.png")} />

            <RegularText text={Login + "!"} styles={{ color: Colors.WHITE, padding: '3%', marginBottom: '5%' }} />
            <View style={cardContainer}>
                <RegularTextInput isFocused={true} placeholder={Username} onUpdate={setUsername} icon={require("../../assets/images/user.png")} />
                <RegularTextInput containerStyle={{ marginTop: '10%' }} placeholder={Password} onUpdate={setPassword} icon={require("../../assets/images/password.png")} />

                <Button
                    noAnimation={true}
                    styles={{ marginTop: 20 }}
                    onPress={() => {
                        isLoggedin()
                    }}
                    text={Login} />
            </View>



        </View>
    )
}