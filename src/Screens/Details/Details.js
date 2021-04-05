import React, { Fragment } from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
    Text
} from 'react-native';
import styles from './styles'
import Background from '../../Components/Background/Background'
import Description from '../../Components/Description/Description'

const Details = ({ route }) => {
    const { imagem,
        titulo,
        estudio,
        itemDesc,
        itemName,
        preco,
        id } = route.params;
    return (
        <>
            <Background />
            <Description
                imagem={imagem}
                titulo={titulo}
                itemDesc={itemDesc}
                itemName={itemName}
                preco={preco}
                estudio={estudio}
                id={id}
            />
        </>

    );
};

export default Details
