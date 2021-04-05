import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity, Text, View, Image, ImageBackground, Button } from 'react-native'
import styles from './styles'
import Cart from '../Cart/Cart'
import Botao from '../Button/Button'

const Description = ({
    imagem,
    titulo,
    itemDesc,
    itemName,
    preco,
    estudio,
    id
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.position}>
                <View style={styles.content}>
                    <View style={styles.contentIntern}>
                        <View>
                            <Text style={styles.textSup}>{estudio}</Text>
                            <Text style={styles.textMed}>{itemName}</Text>
                            <Text style={styles.textInf}>{titulo}</Text>
                        </View>
                        <Image
                            source={imagem}
                            style={styles.img}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.Description}>{itemDesc}</Text>
                    <View style={styles.final}>
                        <Text style={styles.moeda}>R$ {preco}</Text>
                        <Botao title="COMPRAR" />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Description