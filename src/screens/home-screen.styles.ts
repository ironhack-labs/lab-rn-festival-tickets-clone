import {StyleSheet} from 'react-native';
import {SPACING} from '../themes';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 240,
  },
  scrollArea: {
    flex: 1,
  },
  scrollAreaContainer: {
    paddingBottom: 65,
  },
  similarEventsArea: {
    marginTop: SPACING.container,
  },
});
