import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeTabScreen from "../screens/HomeTab";
import StoreTabScreen from "../screens/StoreTabScreen";
import LeaguesTabScreen from "../screens/LeaguesTabScreen";

const AppBottomNavigator = createMaterialBottomTabNavigator();
const AppTopNavigator = createMaterialTopTabNavigator();

const SecondScreenTopTabNavigator = () => (
    <AppTopNavigator.Navigator
        initialRouteName="CHATS"
        tabBarOptions={{
            style: { backgroundColor: "#490222" },
            labelStyle: { fontSize: 14, fontWeight: "bold" },
            activeTintColor: "#ffffff",
            indicatorStyle: { height: 3, backgroundColor: "#fff", paddingBottom: 6 },
            inactiveTintColor: "#adadad",
            tabStyle: { height: 100, justifyContent: "flex-end" }
        }}
    >
        <AppTopNavigator.Screen component={StoreTabScreen} name="Store" />
        <AppTopNavigator.Screen component={LeaguesTabScreen} name="Leagues" />
    </AppTopNavigator.Navigator>
);

const AllScreenTabNavigator = () => (
    <AppBottomNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarColor: "#490222"
        }}
    >
        <AppBottomNavigator.Screen
            name="Home"
            component={HomeTabScreen}
            options={{
                tabBarIcon: () => <Icon name="book-open" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="Store"
            component={StoreTabScreen}
            options={{
                tabBarIcon: () => <Icon name="file-alt" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="Leagues"
            children={LeaguesTabScreen}
            options={{
                tabBarIcon: () => <Icon name="comment-alt" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="Top Tab Example"
            children={SecondScreenTopTabNavigator}
            options={{
                tabBarIcon: () => <Icon name="comment-alt" size={25} color="#fff" />
            }}
        />
    </AppBottomNavigator.Navigator>
);

export { AllScreenTabNavigator };