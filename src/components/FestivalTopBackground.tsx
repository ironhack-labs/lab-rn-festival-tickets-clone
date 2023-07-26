import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';
import React from 'react';

const FestivalTopBackground = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'#FF9190'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <Image
        source={require('../assets/images/heading.png')}
        resizeMode="cover"
        style={styles.festivalImage}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {backgroundColor: '#FF9190'},
  festivalImage: {width: 'auto', height: 250, top: 0},
});

export default FestivalTopBackground;
