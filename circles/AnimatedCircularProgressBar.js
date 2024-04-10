import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import SmallerCircle from './SmallerCircle';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedCircularProgressBar = ({ progress = 0.8, size = 300, strokeWidth = 30, strokeColor = 'pink', backgroundColor = 'lightgray', displayProgress = false, percentage = 60 }) => {
  const progressRef = useRef(new Animated.Value(0)).current;
  const circleCircumference = 2 * Math.PI * (size / 2 - strokeWidth / 2);

  useEffect(() => {
    if (progress !== progressRef._value) {
      Animated.timing(progressRef, {
        toValue: progress,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [progress]);

  const animatedDashoffset = progressRef.interpolate({
    inputRange: [0, 1],
    outputRange: [circleCircumference, 0], // Inverted calculation
  });

  return (
    <View style={styles.progressBarContainer}>
      <Svg width={size} height={size}>
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circleCircumference}
          strokeDashoffset={animatedDashoffset}
        />
        <SmallerCircle size={size} strokeWidth={strokeWidth} strokeColor={backgroundColor} />
      </Svg>
      {displayProgress && (
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressText}>
            {percentage}%
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  progressTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimatedCircularProgressBar;
