import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Event from './Event';
import {Title2} from '../Titles';

const events = [
  {
    title: 'PEPE Y TEO - STAND UP',
    date: 'Thursday June 11 | 9:00 pm',
    price: 300,
    image: require('../../images/first-card.png'),
  },
  {
    title: 'Papishower - TRUJILLO',
    date: 'Sunday 28 Dec | 8:00 pm',
    price: 300,
    image: require('../../images/first-card.png'),
  },
];

const Events = props => {
  return (
    <View>
      <View style={styles.containerTitle}>
        <Title2 title="Similar Events" />
      </View>
      <ScrollView style={styles.containerScrollView} horizontal={true}>
        {events.map((event, index) => (
          <Event key={index} data={event} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  containerScrollView: {
    margin: 0,
    paddingHorizontal: 16,
  },
});
