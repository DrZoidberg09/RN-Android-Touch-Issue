import {Text, View, TextField, ListItem, ModalProps, Button, Incubator, Colors, Hint, ConnectionStatusBar, Modal} from 'react-native-ui-lib';
import { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, Platform, Dimensions, Alert, Pressable } from 'react-native';
import { useNavigation } from 'expo-router';

export const Screen = () => {
  const navigation = useNavigation();
    const configureUI = () => {
      navigation.setOptions({
        headerTitle: () => <Text text60>Screen</Text>,
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

export default Screen;