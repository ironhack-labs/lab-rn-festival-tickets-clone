/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Price from './components/Price';
import {Title1} from './components/Titles';
import Details from './components/Datails';
import TextP from './components/TextP';
import Events from './components/Events';
import ButtonFloat from './components/ButtonFloat';

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
          <View style={styles.title}>
            <Title1 title="Binational Vs UTC | Opening 2020 - Date 4" />
          </View>
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
        <View style={styles.containerMap}>
          <Image source={require('./images/map.png')} style={styles.map} />
        </View>
        <View>
          <Events />
        </View>
        <View style={styles.space} />
      </ScrollView>
      <ButtonFloat />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  containerMap: {
    marginTop: 35,
    marginBottom: 27,
  },
  title: {
    marginTop: 8,
    marginBottom: 16,
  },
  map: {
    width: '100%',
  },
  space: {
    height: 200,
  },
});

export default App;
