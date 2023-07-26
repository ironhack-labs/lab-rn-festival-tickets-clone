import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

export const buyTicketStyles = StyleSheet.create({
  button: {
    flex: 1,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.pink,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
