import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';

import {similarEventCardStyles} from './similiar-event-card.styles';
import {formatDateLong, formatDateTime} from '../../../utils';
import Heart from '../../../../icons/Heart';

type SimilarEventCardProps = {
  title: string;
  thumbnail: ImageSourcePropType;
  date: string;
  price: string;
  favorite?: boolean;
};

export const SimilarEventCard = ({
  title,
  thumbnail,
  date,
  price,
  favorite,
}: SimilarEventCardProps) => (
  <View style={similarEventCardStyles.card}>
    <Image style={similarEventCardStyles.thumbnail} source={thumbnail} />
    <View style={similarEventCardStyles.content}>
      <View style={similarEventCardStyles.contentRow}>
        <Text style={similarEventCardStyles.title}>{title.toUpperCase()}</Text>
        {favorite && <Heart />}
      </View>
      <View style={similarEventCardStyles.contentRow}>
        <Text style={similarEventCardStyles.date}>
          {formatDateLong(date)} | {formatDateTime(date)}
        </Text>
        <Text style={similarEventCardStyles.price}>{price}</Text>
      </View>
    </View>
  </View>
);
