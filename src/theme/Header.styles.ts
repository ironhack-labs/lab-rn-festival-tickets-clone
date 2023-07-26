import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 285,
    marginTop: 0,
  },

  tabsContainer: {
    height: 50,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 10,
  },

  infoContainer: {
    borderBottomColor: '#6ABDA6',
    borderBottomWidth: 1,
    width: 40,
    marginRight: 28,
    alignItems: 'center',
  },

  infoTab: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
    color: '#6ABDA6',
  },

  priceTab: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  },
});
