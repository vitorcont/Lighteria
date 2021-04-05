
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    imgBkg: {
        width: Dimensions.get('window').width,
        height: "100%",
    },
    BkgContainer: {
        flex: 6
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