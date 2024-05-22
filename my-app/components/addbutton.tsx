import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';

const AddButton = () => {
  const firstValue = useSharedValue(-40);
  const secondValue = useSharedValue(-40);
  const thirdValue = useSharedValue(-40);
  const isOpen = useSharedValue(false);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0),
  );


  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstValue.value = withTiming(30, config);
      secondValue.value = withDelay(50, withTiming(30, config));
      thirdValue.value = withDelay(100, withTiming(30, config));
    } else {
      firstValue.value = withDelay(200, withSpring(110));
      secondValue.value = withDelay(100, withSpring(100));
      thirdValue.value = withSpring(110);
    }
    isOpen.value = !isOpen.value;
  };

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 110],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      right: firstValue.value/2,
      bottom: firstValue.value/2,
      transform: [{scale: scale}],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 100],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: secondValue.value,
      right: -30,
      transform: [{scale: scale}],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 110],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: thirdValue.value/2,
      right: -thirdValue.value-5,
      transform: [{scale: scale}],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${progress.value * 45}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.contentContainer, thirdIcon]}>
        <Pressable style={styles.iconContainer} onPress={() => {handlePress();console.log("Pressed mic")}}>
            <FontAwesome6 name="microphone" size={20} color="white"/>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.contentContainer, secondIcon]}>
      <Pressable style={styles.iconContainer} onPress={() => {handlePress();console.log("Pressed forward-fast")}}>
            <FontAwesome6 name="forward-fast" size={20} color="white"/>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.contentContainer, firstIcon]}>
        <Pressable style={styles.iconContainer} onPress={() => {handlePress();console.log("pen")}}>
            <FontAwesome6 name="pen" size={20} color="white"/>
        </Pressable>
      </Animated.View>
      <Pressable
        style={styles.contentContainerMain}
        onPress={() => {
          handlePress();
        }}>
        <Animated.View style={[styles.iconContainerMain, plusIcon]}>
            <FontAwesome6 name="plus" size={32} color="white"/>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#0088ff',
    position: 'absolute',
    bottom: 0,
    right: -40,
    borderRadius: 50,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  contentContainerMain: {
    backgroundColor: '#0088ff',
    position: 'absolute',
    bottom: 0,
    right: -40,
    borderRadius: 50,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 0},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerMain: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
});