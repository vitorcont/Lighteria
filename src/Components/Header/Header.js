import React, { Fragment } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ColorPropType,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import Cart from '../Cart/Cart'

const Header = () => {
    return (
        <>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Lighteria</Text>
                <Cart />
            </View>
            <View style={styles.header}>
                <View style={styles.separator} />
                <View style={styles.textContainer}>
                    <Text style={styles.text} >Categorias</Text>
                </View>
            </View>
        </>
    );
}

export default Header
