import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  active?: boolean;
};

function Tab({ text, active }: Props) {
  return (
    <TouchableOpacity
      style={[styles.tabContainer, active && styles.tabContainerActive]}>
      <Text style={[styles.text, active && styles.textActive]}>{text}</Text>
    </TouchableOpacity>
  );
}

function Tabs() {
  return (
    <View style={styles.container}>
      <Tab active text="Info" />
      <Tab text="Prices" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  tabContainerActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#6ABDA6',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F4F4F',
  },
  textActive: {
    color: '#6ABDA6',
  },
});

export default Tabs;
