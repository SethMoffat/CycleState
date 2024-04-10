import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
        <Text style={styles.buttonText}>Go to Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsScreen;