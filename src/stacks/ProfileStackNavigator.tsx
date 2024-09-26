import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../types/navigationTypes';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import PostScreen from '../screens/Post/PostScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_left'}} >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyPost" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
