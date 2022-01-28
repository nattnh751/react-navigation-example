import React from 'react'
import { View, Text } from 'react-native'
import Layout from "../navigation/Layout";
import { Button } from "react-native-elements";

const ProfileScreen = ({ navigation, route }) => {
    return (
        <>
            <Layout name="Profile screen" />
            <Button
                type="solid"
                title="Back"
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
                onPress={() => navigation.pop()}
            />
        </>
    )
}

export default ProfileScreen