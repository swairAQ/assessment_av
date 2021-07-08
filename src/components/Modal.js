import React, { Component, useState } from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    TouchableOpacity,
} from 'react-native';
import { Colors, Strings } from '../utilities'
import { RegularText, Button } from '../components'

function ModalView(props) {
    const { onCancel, visible, edit, data, onPress } = props
    const { Name, Age, AddEmployee, UpdateEmployee } = Strings
    const [tName, setName] = useState(edit && data.name)
    const [tAge, setAge] = useState(edit && data.age + "")

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                style={styles.modal}
                onRequestClose={() => { onCancel() }}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <TouchableOpacity onPress={onCancel} style={styles.crossView}>
                            <Image style={styles.icClose} source={require('../assets/images/close.png')} />
                        </TouchableOpacity>

                        <RegularText text={(edit ? UpdateEmployee : AddEmployee)} styles={styles.heading} />
                        <TextInput
                            value={tName}
                            onChangeText={setName}
                            placeholder={Name} style={styles.textInput} />
                        <TextInput
                            value={tAge}
                            onChangeText={setAge}
                            placeholder={Age} style={styles.textInput} />
                        <Button
                            onPress={() =>
                                onPress(tName, tAge)
                            }
                            text="Submit" noAnimation={true} />
                    </View>

                </View>
            </Modal>
        </View>

    );

}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: Colors.BLUE,
        width: '90%',
        height: 40,
        paddingHorizontal: '2%',
        borderRadius: 8,
        marginBottom: '4%'
    },
    heading: {
        marginTop: 10,
        color: Colors.DARK_GREY,
        marginBottom: "5%"
    },
    icClose: {
        height: 15, width: 15, tintColor: Colors.BLUE
    },
    crossView: { position: 'absolute', top: 20, right: '5%', height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: Colors.BLUE, justifyContent: 'center', alignItems: 'center' },
    container: {
        flex: 1,
        // flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        // paddingVertical: '5%'
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'green'
    },
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    textView: {
        padding: '3%',

        fontSize: 22, color: Colors.WHITE, fontWeight: '400'
    },

});

export default ModalView;