import {StyleSheet} from 'react-native';

// import {headingFontFamily} from '../../styles/global';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  activeContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#6abda6',
  },
  label: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    opacity: 0.6,
    letterSpacing: 0.75,
  },
  activeLabel: {
    color: '#6abda6',
    opacity: 1,
  },
});
