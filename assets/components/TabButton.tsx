import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TabButtonProps {
  title: string;
  active: boolean;
}

const TabButton = ({ title, active }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.tab, active ? styles.tabActive : null]}
      activeOpacity={0.7}
    >
      <Text style={[styles.tabText, active ? styles.tabTextActive : null]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#6ABDA6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#6ABDA6',
  },
});

export default TabButton;
