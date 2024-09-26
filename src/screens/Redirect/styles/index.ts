import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PURPLE_DARK_ACTIVE,
  },
  textTitle: {
    color: COLORS.BLUE_LIGHTER,
    fontSize: 24,
  },
});
