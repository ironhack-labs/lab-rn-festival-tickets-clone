import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Details from './Details';
import Prices from './Prices';

interface TabsProps {
  onTabPress: (tab: string) => void;
}

const Tabs = ({onTabPress}: TabsProps) => {
  const [activeTab, setActiveTab] = useState('Info');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabPress(tab);
  };

  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Info' && styles.activeTab]}
        onPress={() => handleTabPress('Info')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'Info' && styles.activeTabText,
          ]}>
          Info
        </Text>
        {activeTab === 'Info' && <View style={styles.tabIndicator} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Prices' && styles.activeTab]}
        onPress={() => handleTabPress('Prices')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'Prices' && styles.activeTabText,
          ]}>
          Prices
        </Text>
        {activeTab === 'Prices' && <View style={styles.tabIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Info');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <Tabs onTabPress={handleTabPress} />
      {activeTab === 'Info' ? <Details /> : <Prices />}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    position: 'relative',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#6abda6',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  activeTabText: {
    color: '#6abda6',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#6abda6',
  },
});

export default App;
