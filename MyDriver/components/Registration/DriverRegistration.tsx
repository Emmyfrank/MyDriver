import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const DriverRegistrationScreen = () => {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleRegister = () => {
    // Handle driver registration logic here (e.g., send data to backend)
    console.log('Driver Registered:', { name, licenseNumber, vehicleType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Driver Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="License Number"
        value={licenseNumber}
        onChangeText={setLicenseNumber}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Vehicle Type"
        value={vehicleType}
        onChangeText={setVehicleType}
      />
      
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
