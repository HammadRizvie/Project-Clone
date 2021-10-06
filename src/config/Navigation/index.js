import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from '../../components/WelcomeScreen'
import Login from '../../components/Login';
import Register from '../../components/Register';
import Home from '../../components/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={
        {
            headerShown:false
        }
    }
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="homeScreenDrawer" component={homeScreenDrawer} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

function homeScreenDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}