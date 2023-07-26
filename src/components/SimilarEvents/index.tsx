import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Event} from '../../types';
import SimilarEvent from './SimilarEvent';
import {similarEventsStyles} from './styles';

const events: Event[] = [
  {
    title: 'Pepe y Teo - STAND - UP 1',
    date: 'Jueves 11 jun.',
    hour: ' 9:00 pm',
    price: '$300',
  },
  {
    title: 'Pepe y Teo - STAND - UP 2',
    date: 'Jueves 11 jun.',
    hour: ' 9:00 pm',
    price: '$300',
  },
  {
    title: 'Pepe y Teo - STAND - UP 3',
    date: 'Jueves 11 jun.',
    hour: ' 9:00 pm',
    price: '$300',
  },
  {
    title: 'Pepe y Teo - STAND - UP 4',
    date: 'Jueves 11 jun.',
    hour: ' 9:00 pm',
    price: '$300',
  },
  {
    title: 'Pepe y Teo - STAND - UP 5',
    date: 'Jueves 11 jun.',
    hour: ' 9:00 pm',
    price: '$300',
  },
];
const SimilarEvents = () => {
  return (
    <View>
      <Text style={similarEventsStyles.titleText}>Similar Events</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={similarEventsStyles.scrollContainer}>
        {events.map(event => (
          <SimilarEvent key={event.title} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SimilarEvents;
