import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -1.9441,
          longitude: 30.0619,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Circle
          center={{ latitude: -1.9441, longitude: 30.0619 }}
          radius={500}
          fillColor="rgba(0, 255, 0, 0.1)"
          strokeColor="rgba(0, 255, 0, 0.3)"
        />
      </MapView>
      
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/profile-pic.jpg' }}
          style={styles.profilePic}
        />
      </View>
      
      <View style={styles.centerMarker}>
        <View style={styles.markerCircle}>
          <Ionicons name="navigate" size={24} color="white" />
        </View>
      </View>
      
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        <Text style={styles.pickupText}onPress={()=>navigation.navigate("vehicleSelectionScreen"as never)}>PICKUP</Text>
        <Text style={styles.locationText}>My current location</Text>
        <View style={styles.divider} />
        <Text style={styles.dropOffText}>DROP-OFF</Text>
        <Text style={styles.locationText}>kicukiro,kanombe , Rwanda</Text>
        <View style={styles.suggestionsContainer}>
          {['University of Kigali', 'F9 Park', 'Amahoro Stadium'].map((place, index) => (
            <View key={index} style={styles.suggestionButton}>
              <Text style={styles.suggestionText}>{place}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.compassContainer}>
        <Ionicons name="compass" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
  },
  profileContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  centerMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -40,
  },
  markerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D0D0D0',
    alignSelf: 'center',
    marginBottom: 20,
  },
  pickupText: {
    fontSize: 12,
    color: '#888',
  },
  dropOffText: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  suggestionButton: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  suggestionText: {
    fontSize: 12,
  },
  compassContainer: {
    position: 'absolute',
    bottom: 200,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});