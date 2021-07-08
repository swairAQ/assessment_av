import { StyleSheet } from 'react-native';

import { Colors } from '../../utilities';
const { BLUE, LIGHT_GRAY, WHITE } = Colors

export default StyleSheet.create({
    imgBackground: { height: '100%', width: '100%' },
    baseView: { position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.7)' },
    vwBackBtn: { position: 'absolute', top: '6%', left: '5%', height: 50, width: 50 },
    icBackBtn: { height: 35, width: 35, tintColor: WHITE },

    container: { flex: 1, backgroundColor: LIGHT_GRAY },
    textView: { fontSize: 30, },
    tempTextView: { fontSize: 70, fontWeight: '300' },
    header: {
        marginTop: '30%',

        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: '3%',
        width: '100%',
        alignItems: 'center'
    },

})