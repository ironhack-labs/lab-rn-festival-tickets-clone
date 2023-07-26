import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Tabs = () => {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[
          styles.button,
          {borderBottomColor: '#6ABDA6', borderBottomWidth: 2},
        ]}>
        <Text style={[styles.tabsText]}>{'Info'}</Text>
      </TouchableOpacity>
      <TouchableOpacity key={'value'} style={[styles.button]}>
        <Text style={{color: '#000000'}}>{'Prices'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsText: {
    color: '#6ABDA6',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.75,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
});

export default Tabs;
