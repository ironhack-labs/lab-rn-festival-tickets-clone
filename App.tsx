import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Home from './src/screens/Home';
import {styles} from './src/theme/Home.styles';

function App(): JSX.Element {
  return (
    <>
      <View style={styles.statusBarXIos} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#FF9190"
          barStyle="dark-content"
          hidden={false}
          animated
          translucent
        />
        <ScrollView>
          <Home />
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy tickets</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

export default App;
