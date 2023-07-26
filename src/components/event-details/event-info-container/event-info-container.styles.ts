import {StyleSheet} from 'react-native';
import {SPACING} from '../../../themes';

export const eventInfoContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.container,
    paddingVertical: SPACING.container / 2,
    flexDirection: 'row',
    columnGap: 10,
  },
});
