/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';

import Tabs from './src/Tabs';
import Details from './src/Details';
import Carousel from './src/Carousel';

function App(): JSX.Element {

  const [safeArea, setSafeArea] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setSafeArea(20)
    }
  }, [])


  return (
    <View>
      <SafeAreaView style={{ backgroundColor: '#FF9190' }}>
        <StatusBar
          animated={true}
          backgroundColor={"#FF9190"}
          barStyle={'default'}
          showHideTransition={'slide'}
          hidden={false}
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Image
              source={require('./images/heading.png')}
              resizeMode='contain'
              style={styles.image} />
            <Tabs tabs={[{ text: 'Info', isSelected: true }, { text: 'Prices', isSelected: false }]} />
            <Details price='600' eventName='Binational Vs UTC | Opening 2020 - Date 4'
              eventDate='Saturday December 24' eventHour='8:00 pm' organizer='Organizer SAC.' eventLocation='Alberto Gallardo Rimac 2304'
              eventDescription='This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.' />
          </View>
          <Text style={styles.similarEvents}>Similar events</Text>
          <Carousel />
        </ScrollView>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Buy tickets</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: 'auto',
    height: 285,
    top: 0
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    padding: 10,
    bottom: Platform.OS === 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    height: 67,
    backgroundColor: '#FF5D57',
  },
  buttonText: {
    color: '#FCFCFC',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  similarEvents: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    color: '#273431',
    paddingBottom: 15,
    paddingHorizontal: 20
  },
});

export default App;
