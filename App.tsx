import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import BuyButton from './assets/components/BuyButton';
import SimilarEventsSection from './assets/components/SimilarEventsSection';
import TabButton from './assets/components/TabButton';
import EventDetails from './assets/components/MainEvent';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FF9190'} barStyle={'dark-content'} />
      <ScrollView>
        <Image
          source={require('./images/heading.png')}
          style={styles.headerImage}
        />
        <View style={styles.tabContainer}>
          <TabButton title="Info" active={true} />
          <TabButton title="Comprar" active={false} />
        </View>
        <EventDetails
          price="$99.99 USD"
          eventTitle="Tecate Pal Norte"
          date="July 30, 2023"
          location="Alberto Gallardo Rimac 2304"
          organizerImage="https://randomuser.me/api/portraits/women/81.jpg"
          organizerText="Organizador SAC."
          description="This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors."
        />
        <View>
          <Image source={require('./images/map.png')} style={styles.mapImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.eventTitle}>Similar Events</Text>
          <SimilarEventsSection />
          <View style={{paddingBottom: 75}}></View>
        </View>
      </ScrollView>
      <BuyButton text="Comprar Ahora" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6ABDA6',
  },
  eventTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
    color: '#00000085',
    fontWeight: '500',
    textAlign: 'justify',
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});

export default App;
