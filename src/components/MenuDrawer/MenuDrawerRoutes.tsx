/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuDrawer from './MenuDrawer';
import Information from '../../screens/information/information';
import {NavigationContainer} from '@react-navigation/native';
import FirstPage from '../../screens/firstPage/firstPage';

// interface MenuDrawerRouterProps {
//   routes: Routes[];
//   initialRouteName?: string;
// }

// interface Routes {
//   routeName: string;
//   title?: string;
//   component: any;
// }

export const Drawer = createDrawerNavigator();

export const MenuDrawerRoutes = () => {
  return (
    // <Drawer.Navigator
    //   initialRouteName={'Information'}
    //   drawerContent={props => <MenuDrawer {...(props as any)} />}>
    //   {routes.map((route) => (
    //     <Drawer.Screen
    //       key={route.routeName}
    //       name={route.routeName}
    //       options={{ title: route.title }}
    //       component={route.component}
    //     />
    //   ))}
    //   <Drawer.Screen
    //     name={'Information'}
    //     options={{title: 'Información'}}
    //     component={Information}
    //   />
    // </Drawer.Navigator>
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MenuDrawerRoutes;
