import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LanguageSelector } from '../components/Settings/LanguageSelector';
import { ThemeToggle } from '../components/Settings/ThemeToggle';
import { NavigationPreference } from '../components/Settings/NavigationPreference';

export const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <LanguageSelector />
      <ThemeToggle />
      <NavigationPreference />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});