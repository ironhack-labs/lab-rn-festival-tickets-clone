import React from 'react';
import {View, Text} from 'react-native';

import {tabStyles} from './tab.styles';

type TabProps = {
  text: string;
  isActive?: boolean;
};

export const Tab = ({text, isActive}: TabProps) => {
  return (
    <View style={[tabStyles.container, isActive && tabStyles.activeContainer]}>
      <Text style={[tabStyles.content, isActive && tabStyles.activeContent]}>
        {text}
      </Text>
    </View>
  );
};
