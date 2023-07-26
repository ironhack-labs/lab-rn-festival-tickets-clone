import {View, Image, Text} from 'react-native';
import React from 'react';
import Heart from '../../icons/Heart';
import {carrouselStyles} from '../theme/Carrousel.styles';

interface Props {
  title: string;
  date: string;
  price: string;
  uri?: string;
}

export const CarrouselItem = ({title, date, price}: Props) => {
  return (
    <View style={carrouselStyles.container}>
      <Image
        source={require('../../images/first-card.png')}
        resizeMode="contain"
      />
      <View style={carrouselStyles.subContainer}>
        <View style={carrouselStyles.textContainer}>
          <Text style={carrouselStyles.title}>{title}</Text>
          <Text style={carrouselStyles.date}>{date}</Text>
        </View>
        <View style={carrouselStyles.iconContainer}>
          <Heart style={carrouselStyles.icon} />
          <Text style={carrouselStyles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};
