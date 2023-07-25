import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import type {Event, EventDetails} from './src/types/event.type';

import {BuyTicket, Details, Header, SimilarEvents, Tab} from './src/components';

import globalStyles from './src/styles/global';

const SIMILAR_EVENTS: Event[] = [
  {
    id: 0,
    title: 'Pepe y Teo - Stand Up',
    date: new Date(2023, 5, 11, 21),
    price: 300,
    favorite: true,
  },
  {
    id: 1,
    title: 'Papishower - TRUJILLO',
    date: new Date(2023, 5, 13, 21),
    price: 350,
  },
];

const DETAILS: EventDetails = {
  price: 300,
  title: 'Binational Vs UTC | Opening 2023 - Date 4',
  date: new Date(2023, 11, 24, 20),
  place: 'Alberto Gallardo Rimac 2304',
  organizer: 'Organizer SAC',
  description:
    'This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.',
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ff9290" barStyle="dark-content" />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}>
        <Header>
          <Image
            source={require('./assets/images/heading.png')}
            style={globalStyles.heroImage}
          />
        </Header>
        <Tab />
        <Details details={DETAILS}>
          <Details.Price />
          <Details.Title />
          <Details.Date />
          <Details.Place />
          <Details.Organizer />
        </Details>
        <SimilarEvents events={SIMILAR_EVENTS} />
      </ScrollView>
      <BuyTicket />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9390',
  },
  scrollContainer: {
    backgroundColor: '#fff',
  },
  scrollContentContainer: {
    backgroundColor: '#fff',
    paddingBottom: 80,
  },
});
