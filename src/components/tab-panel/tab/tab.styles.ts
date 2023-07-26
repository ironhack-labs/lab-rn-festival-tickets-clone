import {StyleSheet} from 'react-native';
import {SPACING} from '../../../themes';

export const tabStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.container / 2,
    paddingVertical: SPACING.container,
  },
  activeContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#6ABDA6',
  },
  content: {
    color: '#000',
    opacity: 0.6,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  },
  activeContent: {
    color: '#6ABDA6',
    opacity: 1,
  },
});
