import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {
  Banner,
  TabPanel,
  EventDetails,
  BuyTicket,
  SimilarEvents,
} from '../components';

import {homeScreenStyles} from './home-screen.styles';

export const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <ScrollView
        style={homeScreenStyles.scrollArea}
        contentContainerStyle={homeScreenStyles.scrollAreaContainer}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <View style={homeScreenStyles.banner}>
          <Banner />
        </View>
        {/* NOTE: this tabs are not functional, maybe on react-navigation tabsStack can help */}
        <TabPanel>
          <TabPanel.Tab text="Info" isActive />
          <TabPanel.Tab text="Prices" />
        </TabPanel>
        <EventDetails>
          <EventDetails.Price price="$300" />
          <EventDetails.Title title="Binational Vs UTC | Opening 2023 - Date 4" />
          <EventDetails.Date date="2023-12-24T20:00:00" />
          <EventDetails.Place place="Alberto Gallardo Rimac 2304" />
          <EventDetails.Organizer
            organizer="Organizer SAC"
            thumbnail={require('../../images/ellipse-1.png')}
          />
          <EventDetails.Description>
            This Friday will be a historic day for our region, and you have to
            be present. In the duel for date 4 of League 1, against UTC, we will
            inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
            thanks to the excellent management of our board of directors.
          </EventDetails.Description>
          <EventDetails.Map />
        </EventDetails>
        <View style={homeScreenStyles.similarEventsArea}>
          <SimilarEvents>
            <SimilarEvents.Title title="Similar Events" />
            <SimilarEvents.Carrousel>
              {/* NOTE: using and endpoint you can pass all the similar events */}
              <SimilarEvents.Card
                title="Pepe y Teo - Stand Up"
                price="$300"
                date="2023-06-11T21:00:00"
                favorite
                thumbnail={require('../../images/first-card.png')}
              />
              <SimilarEvents.Card
                title="Pepe y Teo - Stand Up"
                price="$300"
                date="2023-06-11T21:00:00"
                thumbnail={require('../../images/first-card.png')}
              />
              <SimilarEvents.Card
                title="Pepe y Teo - Stand Up"
                price="$300"
                date="2023-06-11T21:00:00"
                thumbnail={require('../../images/first-card.png')}
              />
            </SimilarEvents.Carrousel>
          </SimilarEvents>
        </View>
      </ScrollView>
      <BuyTicket />
    </View>
  );
};
