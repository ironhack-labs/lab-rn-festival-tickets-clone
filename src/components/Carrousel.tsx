import {Text, ScrollView} from 'react-native';
import React from 'react';
import {CarrouselItem} from './CarrouselItem';
import {carrouselStyles} from '../theme/Carrousel.styles';

export const Carrousel = () => {
  return (
    <>
      <Text style={carrouselStyles.titleEvents}>Similar Events</Text>
      <ScrollView horizontal>
        <CarrouselItem
          title="PEPE Y TEO - STAND UP"
          date="Thursday June 11 | 9:00 pm"
          price="$300"
          uri="../../images/first-card.png"
        />
        <CarrouselItem
          title="PEPE Y TEO - STAND UP"
          date="Thursday June 11 | 9:00 pm"
          price="$300"
        />
        <CarrouselItem
          title="PEPE Y TEO - STAND UP"
          date="Thursday June 11 | 9:00 pm"
          price="$300"
        />
      </ScrollView>
    </>
  );
};
