
import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { CustomTabBar } from './CustomTabBar';
import { Details } from './Details';

const FirstRoute = () => (
  <Details/>
);

const SecondRoute = () => (
  <Details/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Info' },
    { key: 'second', title: 'Precios' },
  ]);


  return (
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={({navigationState}) => 
        <CustomTabBar 
          data={navigationState.routes} 
          active={navigationState.index}
        />
      }
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: layout.height }}
    />
    
  )
}




