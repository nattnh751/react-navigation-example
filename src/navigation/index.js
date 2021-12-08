import React from 'react'
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AllScreenTabNavigator } from "./appTabNavigator";
import AllDrawerNavigation from "./appDrawerNavigator";
import ThirdScreenNavigation from "./appStackNavigator";
const AllAppNavigation = createStackNavigator();

const RootNavigator = () => (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <NavigationContainer>
            <AllAppNavigation.Navigator
                initialRouteName="tab"
                screenOptions={{
                    header: () => null
                }}
            >
                <AllAppNavigation.Screen name="tab" children={AllScreenTabNavigator} />
                <AllAppNavigation.Screen name="stack" children={ThirdScreenNavigation} />
                <AllAppNavigation.Screen name="drawer" children={AllDrawerNavigation} />
            </AllAppNavigation.Navigator>
        </NavigationContainer>
    </SafeAreaView>
);
export default RootNavigator;
