import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {Event} from '../../types';
import Heart from '../icons/Heart';
import {similarEventStyles} from './styles';

const SimilarEvent: FC<{event: Event}> = ({event}) => {
  return (
    <View style={similarEventStyles.container}>
      <Image source={require('../../assets/images/first-card.png')} />
      <View>
        <View style={similarEventStyles.titleContainer}>
          <Text style={similarEventStyles.titleText}>{event.title}</Text>
          <Heart />
        </View>
        <View style={similarEventStyles.subTitleContainer}>
          <Text style={similarEventStyles.dateAndHourText}>
            {event.date} {event.hour}
          </Text>
          <Text style={similarEventStyles.priceText}>{event.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default SimilarEvent;
