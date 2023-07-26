import {Box, HStack} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import Heart from '../../../icons/Heart';

interface ICard {
  url: any;
  nameEvent: string;
  dateEvent: string;
  priceEvent: string;
}

const Card = ({url, nameEvent, dateEvent, priceEvent}: ICard): JSX.Element => {
  return (
    // Se realizó la instalación de native base para utilizar el componente Box como card
    <Box style={styles.card}>
      <Image style={styles.cardImg} source={url} />
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <Text>{nameEvent}</Text>
        <Heart />
      </HStack>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <Text>{dateEvent}</Text>
        <Text>${priceEvent}</Text>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 291,
    marginRight: 16,
  },
  cardImg: {
    width: '100%',
    height: 181,
    borderRadius: 8,
    shadowColor: 'rgba(139, 163, 156, 0.35)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});

export default Card;
