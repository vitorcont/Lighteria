import { useNavigation } from '@react-navigation/core';
import React, { Fragment } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './styles'

const Item = ({
    imagem,
    titulo,
    estudio,
    itemDesc,
    itemName,
    preco,
    id
}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Details", {
                imagem,
                titulo,
                estudio,
                itemDesc,
                itemName,
                preco,
                id
            })}
        >
            <Image
                source={imagem}
                style={styles.img}
                resizeMode="contain" />
            <Text style={styles.text}>{titulo}</Text>
        </TouchableOpacity>
    );
}

export default Item
