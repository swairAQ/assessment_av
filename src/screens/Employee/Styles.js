import { StyleSheet } from 'react-native';

import { Colors } from '../../utilities';
const { BLUE, LIGHT_GRAY, WHITE } = Colors

export default StyleSheet.create({
    icActionBtn: { height: 25, width: 25, tintColor: BLUE },
    actionBtn: { height: 40, width: 40, borderRadius: 40, backgroundColor: WHITE, justifyContent: 'center', alignItems: 'center', marginLeft: '2%' },
    vwButtons: { flexDirection: 'row', marginTop: '5%', marginHorizontal: '2%', justifyContent: 'flex-end', },
    vwMainSwipe: {
        borderRadius: 6, height: 100,
        marginLeft: '4%',
        marginVertical: '1%',
    },
    swipeIcon: { height: 30, width: 30, marginHorizontal: "5%" },
    txtSwipteBtn: { height: 40, },
    vwSwipe: {
        // backgroundColor: '#8A7BA7',
        height: 90,
        marginVertical: "1%",
        // borderLeftColor: BLUE, borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRightColor: 'red',
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: { flex: 1, backgroundColor: LIGHT_GRAY },
    textView: { fontSize: 30, },
    header: {
        backgroundColor: BLUE,
        height: '40%',
        justifyContent: 'center',
        // alignItems: 'flex-end',
        paddingHorizontal: '3%',
        width: '100%',
        borderRadius: 10
    },

})