import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen'
import DeepLinkTestScreen from '../screens/DeepLinkTestScreen'

const Drawer = createDrawerNavigator();
const AllDrawerNavigation = () => (
    <Drawer.Navigator initialRouteName='Profile' screenOptions={{ drawerPosition: 'right' }}>
        <Drawer.Screen component={ProfileScreen} name='Profile' />
        <Drawer.Screen component={DeepLinkTestScreen} name='Deep Link Test' />
    </Drawer.Navigator >
)

export default AllDrawerNavigation;