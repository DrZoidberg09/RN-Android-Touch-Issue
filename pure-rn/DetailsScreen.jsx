import { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { StyleSheet, Text, ActivityIndicator, Platform, Dimensions, Alert, Pressable, View } from 'react-native';

function DetailsScreen ({ navigation }) {

    const configureUI = () => {
      navigation.setOptions({
        headerTitle: () => <Text>Screen</Text>,
        headerTitleAlign: "center",
        headerRight: () => (<Pressable onPress={() => {console.log("doesnt work"); navigation.goBack()}}><Text>Doesnt work</Text></Pressable>),
        //headerMode: "screen",
        headerBackVisible: false,
        headerLeft: () => (
            <Pressable onPressIn={() => {console.log("works"); navigation.goBack()}}><Text>works</Text></Pressable>
        )
      });
    };

    useEffect(() => {
      configureUI();
    }, [])


  return (
<View>
  <Pressable onPress={() => {navigation.goBack()}}><Text>Go back</Text></Pressable>
</View>
  )
};

export default DetailsScreen;