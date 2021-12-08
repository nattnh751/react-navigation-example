import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ThirdScreen from '../screens/ThirdScreen'

const StackNavigator = createStackNavigator();

const ThirdScreenNavigation = () => (
    <StackNavigator.Navigator
        initialRouteName="Third"
        screenOptions={{
            header: () => null
        }}
    >
        <StackNavigator.Screen component={ThirdScreen} name="Third" />
    </StackNavigator.Navigator>
);

export default ThirdScreenNavigation;