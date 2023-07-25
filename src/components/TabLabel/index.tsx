import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type TabLabelProps = {
  text: string;
  active?: boolean;
};

const TabLabel = ({text, active = false}: TabLabelProps) => {
  return (
    <View
      style={{...styles.container, ...(active ? styles.activeContainer : {})}}>
      <Text style={{...styles.label, ...(active ? styles.activeLabel : {})}}>
        {text}
      </Text>
    </View>
  );
};

export default TabLabel;
