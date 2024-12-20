// src/screens/HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../components/shared/Button';

// Define the type for the navigation prop
type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  Safety: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeMydriver: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
  
    <SafeAreaView style={styles.safeArea}>
      {/* <ImageBackground src={require("../")}></ImageBackground> */}
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to MyDrive</Text>
        <Text style={styles.subtitle}>Your trusted ride-sharing app</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Register" 
            onPress={() => navigation.navigate('Registration')} 
          />
          <Button 
            title="Safety Features" 
            onPress={() => navigation.navigate('Safety')} 
          />
          <Button 
            title="App Settings" 
            onPress={() => navigation.navigate('Settings')} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
});