import React, {useEffect, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppStackParamList} from '../types/navigationTypes';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {Animated, Dimensions, Keyboard} from 'react-native';
import {COLORS} from '../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get('window').width;

    return width / 2;
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: '',
          tabBarActiveTintColor: COLORS.WHITE,
          tabBarInactiveTintColor: COLORS.BLUE_LIGHTER,
          tabBarStyle: {backgroundColor: COLORS.PURPLE_DARK_ACTIVE, height: 70},
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      {!keyboardVisible && (
        <Animated.View
          style={{
            width: getWidth() / 14,
            height: 2,
            backgroundColor: COLORS.WHITE,
            position: 'absolute',
            bottom: 16,
            borderRadius: 50,
            left: getWidth() / 12 + 75,
            transform: [{translateX: tabOffsetValue}],
          }}></Animated.View>
      )}
    </>
  );
};

export default AppStackNavigator;
