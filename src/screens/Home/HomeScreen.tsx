import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS} from '../../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeStackScreenProps} from '../../types/navigationTypes';

type Props = HomeStackScreenProps<'Home'>;

interface Post {
  id: string;
  title: string;
  content: string;
  imageURL: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Lorem, ipsum dolor.',
    content: 'Lorem ipsum dolor sit amet.',
    imageURL:
      'https://plus.unsplash.com/premium_photo-1671683371896-53dc511734c3?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Lorem, ipsum dolor.',
    content: 'Lorem ipsum dolor sit amet.',
    imageURL:
      'https://images.unsplash.com/photo-1691313405448-1e10cdde5f09?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PURPLE_DARK_ACTIVE} />
    </View>
  );
};

export default HomeScreen;
