// import React from 'react';
// import { TextInput, StyleSheet } from 'react-native';

// interface InputProps {
//   value: string;
//   onChangeText: (text: string) => void;
//   placeholder: string;
//   secureTextEntry?: boolean;
// }

// export const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, secureTextEntry }) => {
//   return (
//     <TextInput
//       style={styles.input}
//       value={value}
//       onChangeText={onChangeText}
//       placeholder={placeholder}
//       secureTextEntry={secureTextEntry}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     width: '100%',
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type InputType = 'text' | 'phone' | 'email' | 'country' | 'city';

interface InputProps {
  type: InputType;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label: string;
  error?: string;
  countries?: string[];
  cities?: string[];
}

export const EnhancedInput: React.FC<InputProps> = ({
  type,
  value,
  onChangeText,
  placeholder,
  label,
  error,
  countries,
  cities,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const renderInput = () => {
    switch (type) {
      case 'phone':
        return (
          <TextInput
            style={[styles.input, isFocused && styles.focusedInput]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType="phone-pad"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case 'email':
        return (
          <TextInput
            style={[styles.input, isFocused && styles.focusedInput]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case 'country':
        return (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value}
              onValueChange={onChangeText}
              style={styles.picker}
            >
              <Picker.Item label={placeholder} value="" />
              {countries?.map((country) => (
                <Picker.Item key={country} label={country} value={country} />
              ))}
            </Picker>
          </View>
        );
      case 'city':
        return (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value}
              onValueChange={onChangeText}
              style={styles.picker}
            >
              <Picker.Item label={placeholder} value="" />
              {cities?.map((city) => (
                <Picker.Item key={city} label={city} value={city} />
              ))}
            </Picker>
          </View>
        );
      default:
        return (
          <TextInput
            style={[styles.input, isFocused && styles.focusedInput]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#007AFF',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});