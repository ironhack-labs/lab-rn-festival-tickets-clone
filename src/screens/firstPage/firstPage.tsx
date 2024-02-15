import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const FirstPage = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text style={styles.text}>React Native Tutorial from Educative io</Text>
      </View>
    </ScrollView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  text: {
    color: '#6ABDA6',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 8,
    marginTop: 10,
  },
});
