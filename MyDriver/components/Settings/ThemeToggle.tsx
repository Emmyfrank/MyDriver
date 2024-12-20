import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
});