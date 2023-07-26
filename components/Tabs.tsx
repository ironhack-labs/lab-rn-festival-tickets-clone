import {StyleSheet, Text, View} from 'react-native';

export const Tabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <View style={{width: 43, alignItems: 'center'}}>
        <Text style={styles.infoLabel}>Info</Text>
        <View style={{backgroundColor: '#6ABDA6', height: 1, width: '100%'}} />
      </View>
      <Text style={styles.pricesLabel}>Prices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pricesLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
    width: 92,
    paddingVertical: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    opacity: 0.6,
  },
  infoLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
    paddingVertical: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6ABDA6',
  },
  tabsContainer: {
    flexDirection: 'row',
  },
});
