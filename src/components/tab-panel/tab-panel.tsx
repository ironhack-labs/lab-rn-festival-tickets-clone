import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {tabPanelStyles} from './tab-panel.styles';
import {Tab} from './tab';

type TabPanelProps = {
  children: ReactNode;
};

export const TabPanel = ({children}: TabPanelProps) => {
  return <View style={tabPanelStyles.container}>{children}</View>;
};

TabPanel.Tab = Tab;
