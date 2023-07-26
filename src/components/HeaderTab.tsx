import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const HeaderTab = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.tab, styles.active]}>
        <Text style={[styles.label, {color: '#6ABDA6'}]}>Info</Text>
      </View>
      <View style={styles.tab}>
        <Text style={[styles.label]}>Prices</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  tab: {
    padding: 16,
  },
  active: {
    borderBottomWidth: 1,
    borderBottomColor: '#6ABDA6',
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
    color: '#00000060',
  },
});

export default HeaderTab;
