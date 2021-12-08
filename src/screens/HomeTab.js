import React from 'react'
import { View, Text } from 'react-native'
import Layout from "../navigation/Layout";
import { Button } from "react-native-elements";

const HomeTab = ({ navigation, route }) => {
    return (
        <>
            <Layout name="Home Tab" />
            <Button
                type="solid"
                title="Go To Stack"
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
                onPress={() => navigation.navigate("stack")}
            />
            <Button
                type="solid"
                title="Deep Link"
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
                onPress={() => navigation.navigate("drawer", { screen: "Deep Link Test" })}
            />
        </>
    )
}

export default HomeTab