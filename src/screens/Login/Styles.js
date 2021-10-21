import { StyleSheet } from 'react-native';

import { Colors } from '../../utilities';
const { BLUE, WHITE } = Colors

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: BLUE, justifyContent: 'flex-end' },
    header: {
        height: '40%',

    },
    cardContainer: {
        paddingTop: "10%",
        backgroundColor: Colors.WHITE, height: '70%',
        borderTopRightRadius: 20, borderTopLeftRadius: 20
    },
})