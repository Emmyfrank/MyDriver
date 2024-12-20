import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';

const vehicleOptions = [
  { type: 'Just go', icon: 'car-outline', distance: 'Near by you', price: 'PKR-250', time: '2 min' },
  { type: 'Limousine', icon: 'car-sport-outline', distance: '0.2 km', price: 'PKR-250', time: '5 min' },
  { type: 'Luxury', icon: 'car-outline', distance: '0.4 km', price: 'PKR-250', time: '3 min' },
  { type: 'ElectricCar', icon: 'car-outline', distance: '0.45 km', price: 'PKR-450', time: '2 min' },
  { type: 'Bike', icon: 'bicycle-outline', distance: '0.48 km', price: 'PKR-150', time: '3 min' },
  { type: 'Taxi 4 seat', icon: 'car-outline', distance: '0.5 km', price: 'PKR-550', time: '4 min' },
  { type: 'Taxi 7 seat', icon: 'car-outline', distance: '0.67 km', price: 'PKR-600', time: '4 min' },
];

export default function VehicleSelectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
            <View style={styles.originMarker} />
          </Marker>
          <Polyline
            coordinates={[
              { latitude: 37.78825, longitude: -122.4324 },
              { latitude: 37.79825, longitude: -122.4424 },
            ]}
            strokeColor="#6200ee"
            strokeWidth={3}
          />
        </MapView>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        <ScrollView style={styles.optionsList}>
          {vehicleOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionItem,
                index === 1 && styles.selectedOption,
              ]}
            >
              <View style={styles.optionLeft}>
                <Ionicons name={option.icon as any} size={24} color={index === 1 ? 'white' : 'black'} />
                <View style={styles.optionTextContainer}>
                  <Text style={[styles.optionType, index === 1 && styles.selectedText]}>{option.type}</Text>
                  <Text style={[styles.optionDistance, index === 1 && styles.selectedText]}>{option.distance}</Text>
                </View>
              </View>
              <View style={styles.optionRight}>
                <Text style={[styles.optionPrice, index === 1 && styles.selectedText]}>{option.price}</Text>
                <Text style={[styles.optionTime, index === 1 && styles.selectedText]}>{option.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapContainer: {
    height: '40%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  originMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    borderWidth: 3,
    borderColor: 'white',
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D0D0D0',
    alignSelf: 'center',
    marginBottom: 10,
  },
  optionsList: {
    flex: 1,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextContainer: {
    marginLeft: 15,
  },
  optionType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDistance: {
    fontSize: 14,
    color: '#888',
  },
  optionRight: {
    alignItems: 'flex-end',
  },
  optionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionTime: {
    fontSize: 14,
    color: '#888',
  },
  selectedText: {
    color: 'white',
  },
});