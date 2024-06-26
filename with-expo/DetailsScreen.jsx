import { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { StyleSheet, Text, ActivityIndicator, Platform, Dimensions, Alert, Pressable } from 'react-native';

function DetailScreen ({ navigation }) {
    const configureUI = () => {
      navigation.setOptions({
        headerTitle: () => <Text>Screen</Text>,
        headerTitleAlign: "center",
        headerRight: () => (<Pressable onPress={() => {console.log("doesnt work"); navigation.goBack()}}><Text>Doesnt work</Text></Pressable>),
        headerMode: "screen",
        headerBackVisible: false,
        headerLeft: () => (
            <Pressable onPressIn={() => {console.log("works"); navigation.goBack()}}><Text>works</Text></Pressable>
        )
      });
    };

    useLayoutEffect(() => {
      configureUI();
    }, [])


  return (<></>)
};

export default DetailScreen;