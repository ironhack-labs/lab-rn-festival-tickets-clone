import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import Heart from '../../icons/heart';

const { width } = Dimensions.get('screen');
const actualImageWidth = 836;
const actualImageHeight = 522;

interface Props {
  image: ImageSourcePropType;
  title: string;
  location: string;
  price: string;
}

export default function Card({ image, title, location, price }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Heart width={24} height={24} />
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: width * 0.8,
    marginRight: 16,
  },
  image: {
    width: width * 0.8,
    height: actualImageHeight * ((width * 0.8) / actualImageWidth),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingTop: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#273431',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 22,
  },
  location: {
    fontSize: 12,
    fontWeight: '400',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#273431',
  },
});
