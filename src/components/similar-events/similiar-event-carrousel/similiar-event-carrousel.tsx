import {ScrollView} from 'react-native';
import React, {ReactNode} from 'react';

import {similarEventCarrouselStyles} from './similiar-event-carrousel.styles';

type SimilarEventCarrouselProps = {
  children: ReactNode;
};

export const SimilarEventCarrousel = ({
  children,
}: SimilarEventCarrouselProps) => (
  <ScrollView
    horizontal
    contentContainerStyle={similarEventCarrouselStyles.content}>
    {children}
  </ScrollView>
);
