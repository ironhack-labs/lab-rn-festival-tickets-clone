import {Text} from 'react-native';
import React from 'react';

import {similarEventTitleStyles} from './similiar-event-title.styles';

type SimilarEventCarrouselProps = {
  title: string;
};

export const SimilarEventTitle = ({title}: SimilarEventCarrouselProps) => (
  <Text style={similarEventTitleStyles.text}>{title}</Text>
);
