import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import Main from './src/screens/Main'

const Stack = createNativeStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
          <Stack.Screen name = "Home" component={Home}></Stack.Screen>
          <Stack.Screen name = "Main" component={Main}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}