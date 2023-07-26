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
  StatusBar,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Date from './../../../icons/Date';
import MapPin from './../../../icons/MapPin';
import DisplayList from './../../../src/components/DisplayList';
import Header from '../Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Tabs from '../Tabs';
import MapEvent from '../EventLocation';
import EventsSlides from '../EventsSlides';
import FixedBottomBtn from '../FixedBottomBtn';

const LandingPage = (): JSX.Element => {
  const data = [
    {id: '1', title: 'Saturday December 24', iconElement: <Date />},
    {id: '2', title: '8:00 pm', iconElement: null},
    {id: '3', title: 'Alberto Gallardo Rimac 2304', iconElement: <MapPin />},
    {
      id: '4',
      title: 'Organizer SAC.',
      iconElement: <Image source={require('./../../../images/Ellipse1.png')} />,
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: Colors.lighter}}>
      <View>
        <ScrollView style={{marginBottom: 50}}>
          <Header />
          <View style={{marginHorizontal: 15}}>
            <Tabs />
            <Text style={{color: '#6ABDA6', fontSize: 20, fontWeight: '700'}}>$300</Text>

            <Text style={styles.textBold}>
              Binational Vs UTC | Opening 2020 - Date 4
            </Text>
            <DisplayList data={data} />
            <Text style={{color: '#333333', marginVertical: 10}}>
              This Friday will be a historic day for our region, and you have to
              be present. In the duel for date 4 of League 1, against UTC, we
              will inaugurate the lights of the Guillermo Briceño Rosamedina
              stadium, thanks to the excellent management of our board of
              directors.
            </Text>
            <MapEvent />
            <Text style={styles.textBold}>Similar Events</Text>
            <EventsSlides />
          </View>
        </ScrollView>
        <StatusBar backgroundColor={'#FF9190'} />
        <FixedBottomBtn />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textBold: {
    color: '#333333',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    marginVertical: 15,
  },
});

export default LandingPage;
