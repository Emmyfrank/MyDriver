import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegistrationForm from '../Registration/PassengerRegistration';
import { DriverRegistrationScreen } from '../Registration/DriverRegistration';
import { Button } from '../shared/Button';

export const RegistrationScreen: React.FC = () => {
  const [userType, setUserType] = useState<'passenger' | 'driver' | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register for MyDrive</Text>
      {!userType ? (
        <View>
          <Button title="Register as Passenger" onPress={() => setUserType('passenger')}/>
          <Button title="Register as Driver" onPress={() => setUserType('driver')} />
        </View>
      ) : userType === 'passenger' ? (
        <RegistrationForm />
      ) : (
        <DriverRegistrationScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mybutton:{
    backgroundColor:"yellow"

  }
});