import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const EventSlide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Events</Text>
      <View style={styles.card}>
        <Image source={require('../../images/first-card.png')} />
        <Text style={styles.name}>PEPE Y TEO - STAND UP</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>Thursday June 11 | 9:00 pm</Text>
          <Text style={styles.price}>$300</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    width: 291,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.15,
    color: '#273431',
    marginVertical: 16,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#273431',
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#273431',
  },
  price: {fontWeight: '700', fontSize: 16, lineHeight: 24, color: '#273431'},
});
