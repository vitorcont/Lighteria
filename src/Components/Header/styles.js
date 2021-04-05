import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    title: {
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 28,
        fontWeight: '700',
    },
    cart: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 30,
    },
    header: {
    },
    separator: {
        borderWidth: 0.5,
        borderColor: "#A1A5AA"
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -46
    },
    text: {
        padding: 30,
        backgroundColor: "#F4F0F4",
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: "#A1A5AA"

    },
    image: {
        height: 30,
        width: 30,
    },

})

export default styles