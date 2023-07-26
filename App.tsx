import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen} from './src/screens';
import {COLORS} from './src/themes';

const App = () => {
  return (
    // NOTE: I need full screen its easier to use style inline, so the next comment remove the eslint warning
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.pink} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
