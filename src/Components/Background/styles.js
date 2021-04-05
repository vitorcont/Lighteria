
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    imgBkg: {
        height: 30,
        width: Dimensions.get('window').width,
        height: "100%",
    },
    BkgContainer: {

    },
    flash: {
        width: 24,
        height: 24,
        margin: 20
    },
    CartContainer: {
        padding: 15,
    }
})

export default styles