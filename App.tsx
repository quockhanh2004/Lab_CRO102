import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Register from './src/Lab1/Register';
import Home from './src/Lab1/Home';
import Bai2 from './src/Lab1/Bai2';
// import Bai3 from './src/Lab1/Bai3';
import Animation1 from './src/Lab3/Animation1';
import Animation2 from './src/Lab3/Animation2';
import Bai1 from './src/Lab4/Bai1';
import Bai3 from './src/Lab4/Bai3';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="bai2" component={Bai2} />
        <Stack.Screen name="bai3" component={Bai3} /> */}
        {/* <Stack.Screen name="Animation1" component={Animation1} />
        <Stack.Screen name="Animation2" component={Animation2} /> */}
        <Stack.Screen name="Lab4Bai1" component={Bai1} />
        <Stack.Screen name="Lab4Bai3" component={Bai3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})