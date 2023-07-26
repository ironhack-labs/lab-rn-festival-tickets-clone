import React from 'react';
import {ScrollView, View, Image, useWindowDimensions, Text} from 'react-native';
import DisplayList from './DisplayList';
import Heart from '../../icons/Heart';

const EventsSlides = () => {
  const {width, height} = useWindowDimensions();

  const dataCard1 = [
    {id: '1', title: 'PEPE Y TEO - STAND UP', iconElement: <Heart />},
    {
      id: '2',
      title: 'Thursday June 11 | 9:00 pm',
      iconElement: <Text style={{color: '#000000'}}> $300</Text>,
    },
  ];

  const dataCard2 = [
    {id: '1', title: 'Papishower - TRUJILLO', iconElement: <Heart />},
    {
      id: '2',
      title: 'Sunday 28 Dec | 8:00 pm',
      iconElement: <Text style={{color: '#000000'}}> $3,300</Text>,
    },
  ];
  return (
    <ScrollView horizontal={true}>
      <View>
        <Image
          source={require('./../../images/first-card.png')}
          style={{width: width - 60, height: height / 3, borderRadius: 10, marginHorizontal: 5}}
        />
        <DisplayList data={dataCard1} />
      </View>
      <View>
        <Image
          source={require('./../../images/second-card.png')}
          style={{width: width - 50, height: height / 3, borderRadius: 10, marginHorizontal: 5}}
        />
        <DisplayList data={dataCard2} />
      </View>
    </ScrollView>
  );
};

export default EventsSlides;
