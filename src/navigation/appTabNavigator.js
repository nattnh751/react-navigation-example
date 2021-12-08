import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";

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
        <AppTopNavigator.Screen component={SecondScreen} name="CHATS" />
        <AppTopNavigator.Screen component={SecondScreen} name="REQUESTS" />
    </AppTopNavigator.Navigator>
);

const AllScreenTabNavigator = () => (
    <AppBottomNavigator.Navigator
        initialRouteName="First"
        screenOptions={{
            tabBarColor: "#490222"
        }}
    >
        <AppBottomNavigator.Screen
            name="First"
            component={FirstScreen}
            options={{
                tabBarIcon: () => <Icon name="book-open" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="First Two"
            component={FirstScreen}
            options={{
                tabBarIcon: () => <Icon name="file-alt" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="Second"
            children={SecondScreenTopTabNavigator}
            options={{
                tabBarIcon: () => <Icon name="comment-alt" size={25} color="#fff" />
            }}
        />
        <AppBottomNavigator.Screen
            name="Second Two"
            children={SecondScreenTopTabNavigator}
            options={{
                tabBarIcon: () => <Icon name="user" size={25} color="#fff" />
            }}
        />
    </AppBottomNavigator.Navigator>
);

export { AllScreenTabNavigator };