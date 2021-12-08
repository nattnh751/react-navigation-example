import React from 'react'
import { View, Text } from 'react-native'
import Layout from "../navigation/Layout";
import { Button } from "react-native-elements";

const FirstScreen = ({ navigation, route }) => {
    return (
        <>
            <Layout />
            <Button
                type="solid"
                title="Third Screen"
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
        </>
    )
}

export default FirstScreen