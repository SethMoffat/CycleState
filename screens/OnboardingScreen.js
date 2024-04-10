import React, { useState } from 'react';
import { View, Text, Button, Platform, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [cycleStart, setCycleStart] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [step, setStep] = useState(0);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('cycleStart', cycleStart.toString());
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || cycleStart;
    setShowDatePicker(Platform.OS === 'ios');
    setCycleStart(currentDate);
  };

  const handleSubmit = () => {
    if (step === 0) {
      setStep(1);
    } else {
      storeData();
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      {step === 0 ? (
        <>
          <Text style={styles.question}>What's your name?</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            value={name}
          />
        </>
      ) : (
        <>
          <Text style={styles.question}>When did your last cycle start?</Text>
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
            testID="dateTimePicker"
            value={cycleStart}
            mode={'date'}
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()} // Exclude all days that have not happened yet
          />
          )}
        </>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default OnboardingScreen;