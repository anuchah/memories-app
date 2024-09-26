import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {styles} from './styles';
import {COLORS} from '../../constants/color';
import {CommonActions} from '@react-navigation/native';

type Props = RootStackScreenProps<'Redirect'>;

const RedirectScreen: React.FC<Props> = ({navigation}) => {
  const accessToken = 'qwertyuioasdfgh';

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 2000) + 1000;

    const timeout = setTimeout(() => {
      if (!accessToken) {
        navigation.replace('Signin');
      }

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'App',
              params: {
                screen: 'HomeStack',
                params: {
                  screen: 'Home',
                },
              },
            },
          ],
        }),
      );
    }, randomTime);

    return () => clearTimeout(timeout);
  }, [navigation, accessToken]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PURPLE_DARK_ACTIVE} />
      <Text style={styles.textTitle}>Memories</Text>
    </View>
  );
};

export default RedirectScreen;
