import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {CustomButton} from './components/CustomButton';
import {TicketComponent} from './layouts/TicketComponent';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const imageUrl = require('./images/heading.png');
  const ticketInfo = {
    title: 'Binational Vs UTC',
    subTitle: 'Opening 2020 - Date 4',
    price: '300',
    date: '2020-12-24',
    time: '08:00 pm',
    location: 'Alberto Gallardo Rimac 2304',
    author: 'Organizer SAC',
    description:
      'This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.',
    image: require('./images/Ellipse1.png'),
    imageLocation: require('./images/map.png'),
  };

  const safeViewStyle = {
    backgroundColor: '#FF9190',
    flex: 1,
  };

  return (
    <SafeAreaView style={safeViewStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FF9190'}
      />

      <View style={styles.mainContainer}>
        <TicketComponent imageUrl={imageUrl} ticketInfo={ticketInfo} />
      </View>

      <View>
        <CustomButton backgroundColor={'#FF9190'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 0,
    padding: 0,
  },
});

export default App;
