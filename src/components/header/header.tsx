import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Header = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.areaView}>
      <StatusBar backgroundColor={'#FF9190'} />
      <Image
        style={styles.post}
        source={require('../../../images/heading.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: '#FF9190',
  },
  post: {
    width: '100%',
    height: 235,
  },
});

export default Header;
