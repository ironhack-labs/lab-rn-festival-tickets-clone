import React from 'react';
import {View} from 'react-native';

import TabLabel from '../TabLabel';

import styles from './styles';

const Tab = () => {
  return (
    <View style={styles.container}>
      <TabLabel text="Info" active />
      <TabLabel text="Prices" />
    </View>
  );
};

export default Tab;
