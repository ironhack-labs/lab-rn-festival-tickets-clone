import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface SimilarEventsCardProps {
  image: string;
  title: string;
  price: string;
  place: string;
}

const SimilarEventsCard = ({ image, title, price, place }: SimilarEventsCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.timeView}>
            <Text style={styles.cardPlace}>{place}</Text>
            <Text style={styles.cardPrice}>{price}</Text>            
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  timeView:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardDetails: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  cardPlace: {
    fontSize: 16,
    color: '#00000075',
  },
});

export default SimilarEventsCard;
