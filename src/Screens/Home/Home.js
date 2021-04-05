import React from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
} from 'react-native';
import Header from '../../Components/Header/Header'
import Item from '../../Components/Item/Item'
import styles from './styles'
import { DATA } from '../../utils/data'



const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home
