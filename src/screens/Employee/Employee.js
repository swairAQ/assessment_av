import React, { Component, useState, useRef, useEffect } from 'react';
import {
    View, FlatList, Animated, Easing, ActivityIndicator, TouchableOpacity, Image
} from 'react-native';
import Styles from './Styles'
import { Modal, RegularText } from '../../components'
import { Strings, Colors, Service } from '../../utilities'

import Swipeable from 'react-native-swipeable';

const EmployeeService = new Service()
export default function Employee(props) {
    //MARK:- Variables
    const swipeableRef = useRef(null);
    const { Morning, Evening, Afternoon, Edit, Delete } = Strings
    const { container, vwBackBtn, icBackBtn, header, vwSwipe, swipeIcon, vwMainSwipe, icActionBtn, vwButtons, actionBtn } = Styles
    const { navigation } = props
    const rightButtons = [
        <TouchableOpacity onPress={onPressEdit} style={vwSwipe}><Image resizeMode='contain' source={require('../../assets/images/edit.png')} style={swipeIcon} /></TouchableOpacity>,
        <TouchableOpacity onPress={onPressDelete} style={[vwSwipe, { borderLeftColor: Colors.BLUE, borderLeftWidth: 1, }]}><Image resizeMode='contain' source={require('../../assets/images/trash.png')} style={swipeIcon} /></TouchableOpacity>
    ];
    //MARK:- Hooks
    const [swipeData, setSwipeData] = useState({})
    const [employeeData, setEmployeeData] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [isFilterPressed, setIsFilterPressed] = useState(false)
    const [processingOverlay, setProcessingOverlay] = useState(false)


    useEffect(() => {
        const data = EmployeeService.getEmployees()
        setEmployeeData(data);
    }, [])

    //MARK:- Functions
    function getTime() {
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            return Morning
        } else if (curHr < 18) {
            return Afternoon
        } else {
            return Evening
        }
    }
    function onPressEdit() {
        setIsEdit(true)
        setModalVisible(true)
    }
    function onPressAdd() {
        setIsEdit(false)
        setModalVisible(true)
    }
    function onPressDelete() {
        setProcessingOverlay(true)
        console.log('true')
        const result = EmployeeService.deleteEmployee(swipeData.id)
        setEmployeeData(result)
        setTimeout(() => {

            setProcessingOverlay(false)
        }, 100);
    }
    function onSubmit(name, age) {

        setModalVisible(false)
        setProcessingOverlay(true)
        var results;
        if (isEdit) {
            results = EmployeeService.updateEmployee({ id: swipeData.id, name: name, age: age })
        }
        else {
            results = EmployeeService.addEmployee({ name: name, age: age })
        }
        setEmployeeData(results)


        setProcessingOverlay(false)

    }
    function onFilterPress() {
        if (isFilterPressed) {
            setEmployeeData(EmployeeService.getEmployees())
        }
        else {
            const results = employeeData.filter(data => data.age >= 25);
            setEmployeeData(results)
        }
        setIsFilterPressed(!isFilterPressed)
    }
    function renderButtons() {
        return (
            <View style={vwButtons}>
                <TouchableOpacity
                    onPress={onPressAdd}
                    style={actionBtn}>
                    <Image
                        resizeMode='contain'
                        style={icActionBtn}
                        source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onFilterPress}
                    style={[actionBtn, isFilterPressed && { backgroundColor: Colors.LIGHT_GRAY }]}>
                    <Image
                        resizeMode='contain'
                        style={icActionBtn}
                        source={require('../../assets/images/filter.png')} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={container}>

            {processingOverlay &&
                renderLoadingView()
            }
            <View style={header}>
                <AnimatedText text={getTime()} />
                {renderButtons()}
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={vwBackBtn}>
                <Image resizeMode='contain' style={icBackBtn} source={require("../../assets/images/back.png")} />
            </TouchableOpacity>

            <FlatList
                extraData={processingOverlay}
                style={{ marginTop: '-20%' }}
                data={employeeData}
                keyExtractor={({ item, index }) => item + index}
                renderItem={renderItem} />
            {
                modalVisible &&
                <Modal
                    edit={isEdit}
                    data={swipeData}
                    onPress={onSubmit}
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                />
            }
        </View>
    )
    function renderLoadingView() {
        return (<View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '100%',
                width: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}>
            <ActivityIndicator size="large" color={Colors.BLUE} animating={true} />
        </View>)
    }

    function renderItem({ item, index }) {
        return (
            <Swipeable
                key={index}
                // onSwipeRelease={() => { swipeableRef.current.onDone() }}
                ref={swipeableRef}
                backgroundColor={Colors.WHITE}
                style={vwMainSwipe}

                onSwipeStart={() => setSwipeData(item)}
                rightButtons={rightButtons}>
                <RegularText text={item.name} styles={{ color: Colors.DARK_GREY }} />
                <RegularText text={item.age + " years old"} styles={{ color: Colors.SUB_GRAY }} />
            </Swipeable>
        );

    }
}
class AnimatedText extends Component {

    constructor() {
        super()
        this.txtAnimationVal = new Animated.Value(0)
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        this.txtAnimationVal.setValue(0)
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

            createAnimation(this.txtAnimationVal, 1000, Easing.ease, 200)
        ]).start()
    }

    render() {

        const txt = this.txtAnimationVal.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 20]
        })
        return (
            <Animated.View
                style={[{ top: txt }, Styles.btnView, this.props.styles]}>

                <RegularText
                    styles={Styles.textView}
                    text={this.props.text}
                />
            </Animated.View>
        );
    }
}
