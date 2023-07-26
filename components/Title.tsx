import {StyleSheet, Text} from 'react-native';

export const Title = () => {
  return (
    <Text style={styles.title}>Binational Vs UTC | Opening 2020 - Date 4</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#333333',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
  },
});
