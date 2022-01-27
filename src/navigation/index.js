import React from 'react'
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { AllScreenTabNavigator } from "./appTabNavigator";
import AllDrawerNavigation from "./appDrawerNavigator";
import ThirdScreenNavigation from "./appStackNavigator";
import ProfileScreen from '../screens/ProfileScreen'

const AllAppNavigation = createStackNavigator();

const RootNavigator = () => (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <NavigationContainer>
            <AllAppNavigation.Navigator
                initialRouteName="drawer"
                screenOptions={{
                    header: () => null
                }}
            >
                <AllAppNavigation.Screen name="drawer" children={AllDrawerNavigation} />
                <AllAppNavigation.Screen name="profile" children={ProfileScreen} />
            </AllAppNavigation.Navigator>
        </NavigationContainer>
    </SafeAreaView>
);
export default RootNavigator;
