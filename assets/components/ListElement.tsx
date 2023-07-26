import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
}

const IconWithText = ({ icon, text }: IconWithTextProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    color: '#00000080',
  },
});

export default IconWithText;
