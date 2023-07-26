/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import HeaderTab from './src/components/HeaderTab';
import {DetailsCard} from './src/components/DetailsCard';
import BuyButton from './src/components/BuyButton';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#FF5D57'} />
      <ScrollView>
        <Image source={require('./images/heading.png')} />
        <HeaderTab />
        <DetailsCard />
        <BuyButton />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
