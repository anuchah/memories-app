import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PURPLE_DARK_ACTIVE,
    gap: 16
  },
  headerContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
  },
});
