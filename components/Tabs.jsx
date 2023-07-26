import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log('Btn 1')}>
        <View style={[styles.btn, styles.btnActive]}>
          <Text style={styles.btnText}>Info</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log('Btn 2')}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Price</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
  },
  btn: {
    height: 46,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    letterSpacing: 0.75,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  btnActive: {
    borderBottomWidth: 1.33,
    borderBottomColor: '#6ABDA6',
  },
});
