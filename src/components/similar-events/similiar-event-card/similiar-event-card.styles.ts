import {StyleSheet, Platform} from 'react-native';
import {SPACING} from '../../../themes';

export const similarEventCardStyles = StyleSheet.create({
  card: {
    width: 290,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingBottom: SPACING.container,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  thumbnail: {
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: SPACING.container / 2,
    rowGap: SPACING.container / 2,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#273431',
  },
  price: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#273431',
  },
});
