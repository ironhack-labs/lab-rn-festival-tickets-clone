import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Button, NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Header from './src/components/header/header';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstPage from './src/screens/firstPage/firstPage';
import {MenuDrawer} from './src/components/MenuDrawer';
import Information from './src/screens/information/information';
// import Tabs from './src/components/tabs/tabs';

export const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme}>
        <Header />
        <Drawer.Navigator
          drawerContent={props => <MenuDrawer {...(props as any)} />}>
          <Drawer.Screen
            name="FirstPage"
            options={{drawerLabel: 'First page Option', title: 'First Stack'}}
            component={FirstPage}
          />
          <Drawer.Screen
            name="Information"
            options={{
              drawerLabel: 'Information page Option',
              title: 'First Stack',
            }}
            component={Information}
          />
        </Drawer.Navigator>
        {/* <Tabs /> */}
        <Button style={styles.buttonBuy}>
          <Text style={styles.buttonText}>Buy tickets</Text>
        </Button>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  buttonBuy: {
    backgroundColor: '#FF5D57',
    borderRadius: 0,
    width: '100%',
    height: 65,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default App;
