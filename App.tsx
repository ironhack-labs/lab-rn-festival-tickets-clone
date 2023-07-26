/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Price from './components/Price';
import {Title1} from './components/Title1';
import Details from './components/Datails';
import TextP from './components/TextP';

const imageProfile = require('./images/Ellipse1.png');

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FF9190" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Banner />
        <Tabs />
        <View style={styles.container}>
          <Price value={'300'} />
          <Title1 title="Binational Vs UTC | Opening 2020 - Date 4" />
          <Details
            date="Saturday December 24"
            hour="8:00 pm"
            address="Alberto Gallardo Rimac 2304"
            organizer="Organizer SAC."
            imageProfile={imageProfile}
          />
          <TextP>
            This Friday will be a historic day for our region, and you have to
            be present. In the duel for date 4 of League 1, against UTC, we will
            inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
            thanks to the excellent management of our board of directors.
          </TextP>
        </View>
        <Image source={require('./images/map.png')} style={styles.map} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  map: {
    width: '100%',
  },
});

export default App;
