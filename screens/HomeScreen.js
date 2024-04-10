import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
  style={styles.icon}
  source={require('../assets/icon.png')}
/>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cycle')}>
        <Text style={styles.buttonText}>Go to Cycle Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the top
        paddingTop: 50, // Add padding to the top
      },
      icon: {
        width: 250,
        height: 250,
        marginBottom: 20,
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
    height: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;