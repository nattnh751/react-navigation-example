import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FourthScreen from '../screens/FourthScreen'
import FifthScreen from '../screens/FifthScreen'

const Drawer = createDrawerNavigator();
const AllDrawerNavigation = () => (
    <Drawer.Navigator initialRouteName='Fourth'>
        <Drawer.Screen component={FourthScreen} name='Fourth' />
        <Drawer.Screen component={FifthScreen} name='Fifth' />
    </Drawer.Navigator>
)

export default AllDrawerNavigation;