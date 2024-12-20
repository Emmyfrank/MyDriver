import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Language:</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Kinyarwanda" value="rw" />
        <Picker.Item label="Swahili" value="sw" />
        <Picker.Item label="kishona" value="sw" />
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
