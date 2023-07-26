import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabsProps} from '../types';

const Tabs: FC<TabsProps> = ({tabs, currentTab, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {tabs.map(({key, label}) => (
        <View
          key={key}
          style={[
            styles.tab,
            {borderBottomWidth: currentTab === key ? 1.33 : 0},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {color: currentTab === key ? '#6ABDA6' : '#00000099'},
            ]}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  tab: {
    paddingVertical: 17,
    paddingHorizontal: 13,
    borderBottomColor: '#6ABDA6',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Tabs;
