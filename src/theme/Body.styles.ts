import {StyleSheet} from 'react-native';

export const bodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  priceText: {
    color: '#6ABDA6',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Poppins',
    lineHeight: 28,
  },

  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: '#333333',
  },

  infoContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    marginTop: 10,
  },

  locationContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    marginTop: 0,
  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#828282',
  },

  organizer: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
  },

  info: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 20,
  },

  icon: {
    marginRight: 20,
    marginTop: 4,
  },

  loadMore: {
    color: '#6ABDA6',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins',
    lineHeight: 28,
    textAlign: 'right',
  },
});
