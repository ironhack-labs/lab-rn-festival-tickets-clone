/* eslint-disable react/react-in-jsx-scope */
import {ScrollView} from 'react-native';
import {Card} from './Card';

export const Carousel = () => {
  const dataCards = [
    {
      id: '1113',
      title: 'PEPE Y TEO - STAND UP',
      date: '2020-06-12',
      time: '9:00 pm',
      price: '300',
    },
    {
      id: '1234',
      title: 'Papishower - TRUJILLO',
      date: '2020-12-28',
      time: '9:00 pm',
      price: '3300',
    },
  ];

  return (
    <ScrollView horizontal>
      {dataCards.map(card => (
        <Card key={card.id} data={card} />
      ))}
    </ScrollView>
  );
};
