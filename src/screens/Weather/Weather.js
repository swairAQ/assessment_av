import React, { Component, useState, useRef, useEffect } from 'react';
import {
    ActivityIndicator,
    View, FlatList, ImageBackground, TouchableOpacity, Image
} from 'react-native';
import Styles from './Styles'
import { Modal, RegularText } from '../../components'
import { Strings, Colors, Service } from '../../utilities'
import { WeatherAPI } from '../../redux/action'
import { useSelector, useDispatch } from 'react-redux'

export default function Weather(props) {
    //MARK:- Variables
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const { tempPostfix, Edit, Delete } = Strings
    const { container, vwBackBtn, icBackBtn, header, baseView, imgBackground, textView, tempTextView } = Styles
    const { navigation } = props


    //MARK:- Hooks
    const dispatch = useDispatch()
    const data = useSelector(state => state.WeatherReducer.data);
    const state = useSelector(state => state.WeatherReducer);

    const [weatherData, setWeatherData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(WeatherAPI());
    }, [])
    useEffect(
        () => {
            if (data != '' && data != undefined && !data.error) {
                console.log(data)
                setWeatherData(data.consolidated_weather)
                setLoading(false)

            }
            else if ((data.error || state.error != null)) {
                setLoading(false)
            }
        },
        [state]
    );

    //MARK:- Functions
    function renderLoadingView() {
        return (<View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '100%',
                width: '100%',
                flex: 1,
            }}>

            <ActivityIndicator size="large" color={Colors.BLUE} animating={true} />
        </View>)
    }
    function renderItem({ item, index }) {

        return (<View style={{
            backgroundColor: '#F5F5F5', borderRadius: 10, marginRight: 10,
            width: 70,
            height: 90,
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Image
                style={{ width: 30, height: 30 }}
                source={{ uri: "https://www.metaweather.com/static/img/weather/png/" + item.weather_state_abbr + ".png" }} />

            <RegularText styles={{ color: Colors.DARK_GREY, marginTop: 4, fontSize: 18 }} text={(item.the_temp).toFixed(0) + tempPostfix} />

        </View>)

    }

    return (
        <View style={container}>
            {
                loading ? renderLoadingView() :
                    <ImageBackground
                        style={imgBackground}
                        source={backgroundSky[weatherData[0].weather_state_name]}
                    >
                        <View style={baseView}>
                            <View style={header}>
                                <RegularText styles={textView} text={state.data.title} />
                                <RegularText styles={{ fontSize: 16 }} text={new Date(state.data.time).toLocaleDateString("en-US", options)} />
                                <RegularText styles={tempTextView} text={(weatherData[0].the_temp).toFixed(0) + tempPostfix} />
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={{ uri: "https://www.metaweather.com/static/img/weather/png/" + weatherData[0].weather_state_abbr + ".png" }} />
                                <RegularText text={(weatherData[0].weather_state_name)} />
                                <RegularText styles={{ fontSize: 16 }} text={(weatherData[0].min_temp).toFixed(0) + tempPostfix + " / " + (weatherData[0].max_temp).toFixed(0) + tempPostfix} />
                            </View>
                            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                                <FlatList
                                    horizontal

                                    style={{
                                        marginHorizontal: '3%', height: 90, flexGrow: 0
                                    }}
                                    data={weatherData}
                                    renderItem={renderItem}
                                    keyExtractor={({ item, index }) => item + index}
                                />

                            </View>
                            <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                                <RegularText styles={{ fontSize: 15, marginBottom: 10 }} text={"© source MetaWeather"} />
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={vwBackBtn}>
                                <Image resizeMode='contain' style={icBackBtn} source={require("../../assets/images/back.png")} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
            }
        </View>
    )


}
const backgroundSky = {
    "Clear": require('../../assets/images/clearSky.gif'),
    "Light Cloud": require('../../assets/images/lightCloud.gif'),

}