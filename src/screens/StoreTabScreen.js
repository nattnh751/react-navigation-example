import React from 'react'
import { View, Text } from 'react-native'
import Layout from "../navigation/Layout";
import { Button } from "react-native-elements";

const StoreTabScreen = ({ navigation, route }) => {
    return (
        <>
            <Layout name="Store Tab" />
            <Button
                type="solid"
                title="Go To Drawer"
                containerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 200
                }}
                buttonStyle={{
                    borderColor: "#490222",
                    backgroundColor: "#490222",
                    width: 160,
                    borderWidth: 1.3
                }}
                titleStyle={{
                    color: "#fff"
                }}
                onPress={() => navigation.navigate("drawer")}
            />
        </>
    )
}

export default StoreTabScreen