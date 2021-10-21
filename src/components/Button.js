import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity,
    Easing,
} from 'react-native';
import { Colors } from '../utilities'

class Button extends Component {

    constructor() {
        super()
        this.btnAnimationVal = new Animated.Value(0)
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        this.btnAnimationVal.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }
        Animated.parallel([

            createAnimation(this.btnAnimationVal, 1000, Easing.ease, 200)
        ]).start()
    }

    render() {

        const btn = this.btnAnimationVal.interpolate({
            inputRange: [0, 1],
            outputRange: [600, 100]
        })
        return (
            <Animated.View
                style={[!this.props.noAnimation && { top: btn }, styles.btnView, this.props.styles]}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <Text
                        style={styles.textView}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    textView: { fontSize: 20, color: Colors.WHITE, fontWeight: '400' },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
        height: 55,
        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.BLUE,
        margin: 20
    },
    btnView: {
        // position: 'absolute',
        width: '100%'
    }
});

export default Button;