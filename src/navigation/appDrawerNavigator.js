import React from 'react';
import { View, Button, Touchable } from 'react-native';
import {
    createDrawerNavigator, DrawerHeaderProps, DrawerContentScrollView,
    DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen'
import DeepLinkTestScreen from '../screens/DeepLinkTestScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AllScreenTabNavigator } from "./appTabNavigator";
import ThirdScreenNavigation from "./appStackNavigator";
const Drawer = createDrawerNavigator();
const AllDrawerNavigation = () => (
    <Drawer.Navigator initialRouteName='Profile' drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
        header: (props: DrawerHeaderProps) => (
            <View
                style={{
                    backgroundColor: 'red',
                    height: 80,
                    alignItems: 'right',
                    width: '100%',
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        height: 80,
                        width: 40,
                        marginEnd: 0,
                    }}
                    onPress={() => { props.navigation.toggleDrawer() }} />
            </View>
        )
    }}>
        <Drawer.Screen name="tab" component={AllScreenTabNavigator} />
        <Drawer.Screen name="stack" component={ThirdScreenNavigation} />

    </Drawer.Navigator >
)
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => props.navigation.navigate("tab", { screen: "Leagues" })}
            />
            <DrawerItem
                label="Profile"
                onPress={() => props.navigation.navigate("profile")}
            />
        </DrawerContentScrollView>
    );
}
export default AllDrawerNavigation;