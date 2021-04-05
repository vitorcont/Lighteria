import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import styles from './styles'
import Cart from '../Cart/Cart'

const Background = () => {
    const imgSrc = require('../../assets/images/bgimg.jpg')
    const navigation = useNavigation()
    return (
        <View style={styles.BkgContainer}>
            <ImageBackground
                resizeMode="cover"
                source={imgSrc}
                style={styles.imgBkg}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/images/flecha-esquerda.png')}
                        style={styles.flash} />
                    <View style={styles.CartContainer}>
                        <Cart />
                    </View>

                </View>
            </ImageBackground>
        </View >
    )
}

export default Background