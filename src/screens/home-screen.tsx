import {ScrollView, View} from 'react-native';
import React from 'react';
import {Banner, TabPanel, EventDetails, BuyTicket} from '../components';

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
          <View>
            <EventDetails.Price price="$300" />
          </View>
          <View>
            <EventDetails.Title title="Binational Vs UTC | Opening 2023 - Date 4" />
          </View>
          <View>
            <EventDetails.Date date="2023-12-24T20:00:00" />
          </View>

          <View>
            <EventDetails.Place place="Alberto Gallardo Rimac 2304" />
          </View>

          <View>
            <EventDetails.Organizer
              organizer="Organizer SAC"
              thumbnail={require('../../images/ellipse-1.png')}
            />
          </View>

          <View>
            <EventDetails.Description>
              This Friday will be a historic day for our region, and you have to
              be present. In the duel for date 4 of League 1, against UTC, we
              will inaugurate the lights of the Guillermo Briceño Rosamedina
              stadium, thanks to the excellent management of our board of
              directors.
            </EventDetails.Description>
          </View>

          <EventDetails.Map />
        </EventDetails>
      </ScrollView>
      <BuyTicket />
    </View>
  );
};
