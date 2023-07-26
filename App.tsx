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
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
});

export default App;
