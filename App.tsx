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
import Heart from './icons/Heart';
import Date from './icons/Date';
import SvgComponent from './icons/MapPin';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Price from './components/Price';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FF9190" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Banner />
        <Tabs />
        <View style={styles.container}>
          <Price value={'300'} />

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
