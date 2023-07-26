import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SimilarEventsCard from './SimilarEventsCard';

const data = [
  {
    id: '1',
    image: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/first-card.png?alt=media&token=13a28731-8408-4166-baed-92051ac53369',
    title: 'Pepe y Teo - Stand Up',
    price: '$300',
    place: 'Jueves 11 jun. 9:00 pm',
  },
  {
    id: '2',
    image: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/descarga.jpeg?alt=media&token=f9558168-4bbb-4832-ad59-6f4b7460e4bd',
    title: "Tecate Pal' Norte",
    price: '$1,200',
    place: 'Viernes 11 jun. 6:00 pm',
  },
  {
    id: '3',
    image: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/first-card.png?alt=media&token=13a28731-8408-4166-baed-92051ac53369',
    title: 'Pepe y Teo - Stand Up',
    price: '$300',
    place: 'Jueves 11 jun. 9:00 pm',
  },
];

const SimilarEventsSection = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SimilarEventsCard
            image={item.image}
            title={item.title}
            price={item.price}
            place={item.place}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardList: {
    paddingTop: 10,
  },
});

export default SimilarEventsSection;
