import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AnimatedCircularProgressBar from '../circles/AnimatedCircularProgressBar';

const CycleScreen = () => {
  const [progress, setProgress] = useState(0.5);

  const handleAddNote = () => {
    // Add your code to handle the button press here
  };

  return (
    <View style={styles.container}>
      <Text>Cycle</Text>
      <AnimatedCircularProgressBar progress={0.9} displayProgress={true} />
      <View style={styles.buttonContainer}>
        <Button title="Add note for today" onPress={handleAddNote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space evenly between items
    padding: 20, // Add padding to the container
  },
  buttonContainer: {
    width: '100%', // Make the button container take up the full width of the screen
    alignItems: 'center', // Center the button horizontally
  },
});

export default CycleScreen;