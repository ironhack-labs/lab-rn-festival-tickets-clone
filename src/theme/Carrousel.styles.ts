import {StyleSheet} from 'react-native';

export const carrouselStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: 330,
  },

  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textContainer: {
    flexDirection: 'column',
  },

  iconContainer: {
    flexDirection: 'column',
  },

  titleEvents: {
    paddingHorizontal: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.15,
    marginBottom: 15,
  },

  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  date: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },

  icon: {
    marginBottom: 16,
    textAlign: 'right',
    marginLeft: 18,
  },

  price: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
