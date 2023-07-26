import {View} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {Tabs} from '../components/Tabs';
import Body from '../components/Body';
import {Map} from '../components/Map';
import {Carrousel} from '../components/Carrousel';

const Home = () => {
  return (
    <View>
      <Header />
      <Tabs />
      <Body />
      <Map />
      <Carrousel />
    </View>
  );
};

export default Home;
