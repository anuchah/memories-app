import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import RedirectScreen from '../screens/Redirect/RedirectScreen';
import SigninScreen from '../screens/SignIn/SigninScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import AppStackNavigator from './AppStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, presentation: 'fullScreenModal', animation: 'slide_from_right'}}>
        <Stack.Screen name="Redirect" component={RedirectScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="App" component={AppStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
