import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ColorPropType
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.cart}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.separator} />
        <View style={styles.textContainer}>
          <Text style={styles.text} >Categorias</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F0F4"
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
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
    paddingHorizontal: 24,
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
    padding: 34,
    backgroundColor: "#F4F0F4",
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: "#A1A5AA"

  }
})

export default App