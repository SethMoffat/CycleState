import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AnimatedCircularProgressBar from '../circles/AnimatedCircularProgressBar';

const CycleScreen = () => {
  const [progress, setProgress] = useState(0.5);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cycle</Text>
      <AnimatedCircularProgressBar progress={0.9} displayProgress={true} />
    </View>
  );
};

export default CycleScreen;
