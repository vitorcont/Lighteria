import { StyleSheet, Dimensions } from 'react-native'
import {
    FONT_FAMILY_SEMI_BOLD,
    FONT_SIZE_SMALL,
} from '../../../../styles/styles';

const styles = StyleSheet.create({
    container: {
        height: 168,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    img: {
        height: 84,
    },
    text: {
        marginTop: 8,
        color: '#848486',
        fontFamily: 'OpenSans'
    },

});


export default styles