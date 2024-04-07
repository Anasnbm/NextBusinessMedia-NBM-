// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './Source/Src/Test';
import Navigatior from './Source/Src/Navigation/Navigation';



const Stack = createNativeStackNavigator();

function App() {
  return (
   <>
   <StatusBar barStyle={'dark-content'}   translucent={true}/>
   <Navigatior/>
   </>
  );
}

export default App;