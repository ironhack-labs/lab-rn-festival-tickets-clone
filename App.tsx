import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  Header,
  Tabs,
  Details,
  Map,
  Button,
  SimilarEvents,
} from './src/components';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF9190" barStyle={'light-content'} />
      <ScrollView style={styles.scrollContainer}>
        <Header />
        <View style={styles.content}>
          <Tabs />
          <Details />
        </View>
        <Map />

        <SimilarEvents />
      </ScrollView>

      <View>
        <Button />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9190',
  },
  scrollContainer: {
    backgroundColor: '#fff',
  },
  content: {
    marginHorizontal: 16,
  },
});

export default App;
