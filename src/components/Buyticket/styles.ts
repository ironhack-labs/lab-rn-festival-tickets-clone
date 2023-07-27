import {StyleSheet} from 'react-native';

import {globalPadding, regularFontFamily} from '../../styles/global';

export default StyleSheet.create({
  button: {
    bottom: 0,
    flex: 1,
    position: 'absolute',
    backgroundColor: '#ff5d57',
    width: '100%',
    alignItems: 'center',
    paddingVertical: globalPadding,
  },
  text: {
    fontWeight: 'bold',
    fontFamily: regularFontFamily,
    color: '#fff',
  },
});
