import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Redirect } from 'expo-router';
import { Pressable, ViewStyle} from 'react-native';
import AddButton from '@/components/addbutton';
import {Colors, Typography, Text} from 'react-native-ui-lib'
import { useRef } from 'react';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {
  
  const TabBarStyle: ViewStyle = {
    position: "absolute",
    bottom: 20,
    backgroundColor: Colors.$textDisabled,
    borderRadius: 20,
    width: "95%",
    left: "2.5%",
    borderWidth: 0,
    borderTopColor: "white",
    right: "2.5%",
  };


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "grey",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: ({ color, focused, children }) =>
            focused ? (<Text style={{ fontSize: 10, fontWeight: 'bold', color: color }}>{children}</Text>) :
                (<Text style={{ fontSize: 10, fontWeight: 'normal', color: "grey" }}>{children}</Text>),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          tabBarLabel: ({ color, focused, children }) =>
            focused ? (<Text style={{ fontSize: 10, fontWeight: 'bold', color: color }}>{children}</Text>) :
                (<Text style={{ fontSize: 10, fontWeight: 'normal', color: "grey" }}>{children}</Text>),
          tabBarIcon: ({ color }) => <AddButton />
        }}
      />
    </Tabs>
  );
}
