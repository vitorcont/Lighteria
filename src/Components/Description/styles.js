
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',

    },
    content: {

    },
    position: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 28,
        width: "80%",
        elevation: 4,
        marginTop: -100
    },
    textSup: {
        fontFamily: 'OpenSans',
        fontSize: 15,
        fontWeight: "700"
    },
    textMed: {
        fontFamily: 'OpenSans',
        fontSize: 25,
        fontWeight: "700"
    },
    textInf: {
        fontFamily: 'OpenSans',
        fontSize: 15,
        color: "#A1A5AA",
        marginTop: 5,
        fontWeight: "700"
    },
    img: {
        width: 100,
        height: 100
    },
    Description: {
        marginTop: 20,
        fontFamily: 'OpenSans',
        fontSize: 12,
        color: "#A1A5AA"
    },
    contentIntern: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    final: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    button: {
        borderRadius: 10,
        width: "100%"
    },
    moeda: {
        fontFamily: 'OpenSans',
        fontSize: 19,
        fontWeight: "700"
    }

})

export default styles