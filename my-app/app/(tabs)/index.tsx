
import {Colors, BorderRadiuses, View, Image, ListItem, Text, Avatar, ActionSheet, Carousel} from 'react-native-ui-lib';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {Platform, TouchableOpacity, StyleSheet, Pressable, Dimensions} from 'react-native'
import { router } from 'expo-router';
export default function TabOneScreen() {
  //const [totalhours, setTotalHours] = useState();

const navigation = useNavigation();
const [showAction, setShowAction] = useState(false);

const configureUI = () => {
  navigation.setOptions({
    headerTitle: () => <Text style={{color: Colors.$textDefault}} text60></Text>,
    headerTitleAlign: "center",
    headerBackTitleVisible: false,
    headerBackVisible: true,
    headerLeft: () => (
      <Pressable onPress={() => {setShowAction(true)}} style={{zIndex: 9999, height: 30, width: 30, marginLeft: 10}}>
      <Text style={{color: Colors.$textDefault}} text90>Works</Text>
      </Pressable>
    ),
  });
};

useLayoutEffect(() => {
  configureUI();
}, [navigation]);


  return (
  <View flex style={[localstyles.container]}>
      <View center flex>
      <Pressable onPress={() => {setShowAction(true)}}>
      <Text style={{color: Colors.$textDefault}} text60>Open ActionSheet</Text>
      </Pressable>
      </View>
      <View center flex>
      <Pressable onPress={() => {router.navigate({pathname: "/Screens/screen"})}}>
      <Text style={{color: Colors.$textDefault}} text60>Go to Screen</Text>
      </Pressable>
      </View>

    <ActionSheet
          title={'Title'}
          message={'Message'}
          cancelButtonIndex={4}
          useNativeIOS={true}
          options={[
            {label: '1', onPress: () => {console.log('1')}},
            {label: '2', onPress: () => {console.log('2')}},
            {label: '3', onPress: () => {console.log('3')}},
            {label: '4', onPress: () => {console.log('4')}},
            {label: 'Abbrechen', onPress: () => console.log('cancel')}
          ]}
          visible={showAction}
          onDismiss={() => setShowAction(false)}
        />
  </View>
  )
}

const liststyles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: BorderRadiuses.br20,
    marginHorizontal: 14
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70
  },
  header: {
    flexDirection: 'row',
  },
  header_text: {
    fontWeight: 'bold',
  },
  page: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.textColor,
  },
  loopCarousel: {
    position: 'absolute',
    bottom: 15,
    left: 10
  }
});

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
  }
});

// @ts-ignore
const Page = ({children, style, ...others}) => {
  return (
    <View {...others} style={[liststyles.page, style]}>
      {children}
    </View>
  );
};