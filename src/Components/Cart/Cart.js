import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import styles from './styles'

export const Cart = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
            <View style={styles.cart}>
                <Image
                    source={require('../../assets/images/icone-sacola.png')}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
export default Cart