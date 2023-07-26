import {View, Text, StyleSheet} from 'react-native';

export const BuyButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Buy Tickets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF5D57',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
  },
});
