/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Button, NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Header from './src/components/header/header';
import Tabs from './src/components/tabs/tabs';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme}>
        <Header />
        <Tabs />
        <Button style={styles.buttonBuy}>
          <Text style={styles.buttonText}>Buy tickets</Text>
        </Button>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  buttonBuy: {
    backgroundColor: '#FF5D57',
    borderRadius: 0,
    width: '100%',
    height: 65,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default App;
