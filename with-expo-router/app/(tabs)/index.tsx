import { Image, Text, StyleSheet, Button, Pressable, View } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => router.navigate({pathname: "/Screens/screen"})}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
