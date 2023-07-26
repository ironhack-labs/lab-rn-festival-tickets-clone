import {appStyles} from './App.styles';
import {ScrollView, View} from 'react-native';
import BuyTicketsButton from './components/BuyTicketsButton';
import EventDetail from './components/EventDetail';
import FestivalTopBackground from './components/FestivalTopBackground';
import React from 'react';
import Tabs from './components/Tabs';
import {Tab} from './types';
import SimilarEvents from './components/SimilarEvents';

const TABS: Tab[] = [
  {key: 'info', label: 'Info'},
  {key: 'prices', label: 'Prices'},
];

function App(): JSX.Element {
  return (
    <>
      <FestivalTopBackground />

      <View style={appStyles.eventInfoContainer}>
        <Tabs
          currentTab="info"
          tabs={TABS}
          containerStyle={appStyles.eventInfoStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <EventDetail
            containerStyle={appStyles.eventInfoStyle}
            event={{
              price: '$ 300',
              title: 'Binational Vs UTC | Opening 2020 - Date 4',
              date: 'Saturday December 24',
              hour: '8:00 pm',
              place: 'Alberto Gallardo Rimac 2304',
              organizer: 'Organizer SAC.',
              description:
                'This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.',
            }}
          />
          <SimilarEvents />
        </ScrollView>
      </View>
      <BuyTicketsButton />
    </>
  );
}

export default App;
