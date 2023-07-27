/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Header from './src/components/Header';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import type {Event, EventDetails} from './src/eventTypes/events.types';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Heart from './assets/icons/Heart';
import Tab from './src/components/Tab';
import {Details} from './src/components/Details';
import SimilarEvents from './src/components/SimilarEvents';
import BuyTicket from './src/components/Buyticket';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#ff9290',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <Header />
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
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
