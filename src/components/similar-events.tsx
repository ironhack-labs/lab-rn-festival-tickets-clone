import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from './card';

const imageEventOne = require('../../images/pepe-teo.png');
const imageEventTwo = require('../../images/papa-shower.png');

export default function SimilarEvents() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Events</Text>
      <ScrollView horizontal>
        <Card
          image={imageEventOne}
          title="PEPE Y TEO - STAND UP"
          location="Thursday June 11 | 9:00 pm"
          price="$300"
        />
        <Card
          image={imageEventTwo}
          title="Papishower - TRUJILLO"
          location="Sunday 28 Dec | 8:00 pm"
          price="$300"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 27,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#273431',
  },
});
