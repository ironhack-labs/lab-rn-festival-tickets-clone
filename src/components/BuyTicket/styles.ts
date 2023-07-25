import {StyleSheet} from 'react-native';

import {globalPadding, regularFontFamily} from '../../styles/global';

export default StyleSheet.create({
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ff5d57',
    paddingVertical: globalPadding,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: regularFontFamily,
  },
});
