import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const NavigationPreference: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState('google');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preferred Navigation:</Text>
      <Picker
        selectedValue={selectedMap}
        onValueChange={(itemValue) => setSelectedMap(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Google Maps" value="google" />
        <Picker.Item label="Apple Maps" value="apple" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    height: 50,
  },
});