import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';

import type {Event} from '../../eventTypes/events.types';

import Heart from '../../../assets/icons/Heart';

import {formatDate, formatPrice, getTimeFromDate} from '../../helpers';

import styles from './styles';

type EventCardProps = {
  event: Event;
};

type SimilarEventsProps = {
  events: Event[];
};

const IMAGES = [
  require('./../../../assets/images/first-card.png'),
  require('./../../../assets/images/image 89.png'),
];

const EventCard = ({event}: EventCardProps) => {
  return (
    <View style={styles.event}>
      <Image style={styles.hero} source={IMAGES[event.id]} resizeMode="cover" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.title.toUpperCase()}</Text>
        {event.favorite && <Heart />}
      </View>
      <View style={styles.datePriceContainer}>
        <Text style={styles.date}>
          {`${formatDate(event.date)} | ${getTimeFromDate(event.date)}`}
        </Text>
        <Text style={styles.price}>{formatPrice(event.price)}</Text>
      </View>
    </View>
  );
};

const SimilarEvents = ({events}: SimilarEventsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Similar Events</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SimilarEvents;
