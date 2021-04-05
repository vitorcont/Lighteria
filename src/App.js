import React from 'react';
import HomeScreen from './Screens/Home/Home'
import Details from './Screens/Details/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode='none'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
        <Stack.Screen
          name="Checkout"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App