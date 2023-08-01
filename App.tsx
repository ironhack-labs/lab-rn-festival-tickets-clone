import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Button from './components/Button';
import Details from './components/Details';
import Events from './components/Events';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#FF9190"
        imageSource={require('./images/heading.png')}
      />
      <ScrollView>
        <Tabs />
        <Events />
      </ScrollView>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
