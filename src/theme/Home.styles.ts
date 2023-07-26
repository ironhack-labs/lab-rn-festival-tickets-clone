import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    padding: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 67,
    backgroundColor: '#FF5D57',
    elevation: 5,
  },

  buttonText: {
    color: '#FCFCFC',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },

  statusBarXIos: {
    backgroundColor: '#FF9190',
    height: 60,
  },
});
