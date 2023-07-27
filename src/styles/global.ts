import {StyleSheet} from 'react-native';

export const globalPadding = 20;
export const globalMargin = 20;
export const headingFontFamily = 'Poppins-Bold';
export const regularFontFamily = 'Poppins-Regular';

export default StyleSheet.create({
  header1: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: headingFontFamily,
  },
  header2: {
    fontSize: 20,
    fontFamily: headingFontFamily,
  },
  header3: {
    fontSize: 14,
    fontFamily: headingFontFamily,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 25,
    fontFamily: regularFontFamily,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sectionContainer: {
    padding: globalPadding,
  },
});
