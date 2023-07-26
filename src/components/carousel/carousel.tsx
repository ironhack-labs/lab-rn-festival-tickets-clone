import { HStack, VStack } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Card from '../card/card';

const Carousel = (): JSX.Element => {
  const firstCard = require('../../../images/first-card.png');
  const secondCard = require('../../../images/second-card.png');

  return (
    <VStack style={styles.events}>
      <Text style={styles.title}>Similar Events</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <HStack space={3}>
          <Card
            url={firstCard}
            nameEvent="PEPE Y TEO - STAND UP"
            dateEvent="Thursday June 11 | 9:00 pm"
            priceEvent="300"
          />
          <Card
            url={secondCard}
            nameEvent="Papishower - TRUJILLO"
            dateEvent="Sunday 28 Dec | 8:00 pm"
            priceEvent="3300"
          />
        </HStack>
      </ScrollView>
    </VStack>
  );
};

const styles = StyleSheet.create({
  events: {
    paddingLeft: 16,
    marginBottom: 15,
  },
  title: {
    color: '#333333',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    marginBottom: 16,
    width: 328,
  },
});

export default Carousel;
