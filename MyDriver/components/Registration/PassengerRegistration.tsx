// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Input } from '../shared/Input';
// import { Button } from '../shared/Button';

// export const PassengerRegistration: React.FC = () => {
//   const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [country, setCountry] = useState('');
//   const [city, setCity] = useState('');

//   const handleRegister = () => {
//     // Implement registration logic here
//     console.log('Registering passenger:', { fullName, phoneNumber, email, country, city });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Passenger Registration</Text>
//       <Input value={fullName} onChangeText={setFullName} placeholder="Full Name" />
//       <Input value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Phone Number" />
//       <Input value={email} onChangeText={setEmail} placeholder="Email" />
//       <Input value={country} onChangeText={setCountry} placeholder="Country" />
//       <Input value={city} onChangeText={setCity} placeholder="City" />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },


  
// });
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Input } from '../shared/Input';
// import { Button } from '../shared/Button';

// export const PassengerRegistration: React.FC = () => {
//   const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [country, setCountry] = useState('');
//   const [city, setCity] = useState('');

//   const handleRegister = () => {
//     // Implement registration logic here
//     console.log('Registering passenger:', { fullName, phoneNumber, email, country, city });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Passenger Registration</Text>
//       <Input value={fullName} onChangeText={setFullName} placeholder="Full Name" />
//       <Input value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Phone Number" />
//       <Input value={email} onChangeText={setEmail} placeholder="Email" />
//       <Input value={country} onChangeText={setCountry} placeholder="Country" />
//       <Input value={city} onChangeText={setCity} placeholder="City" />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
// });
import React, { useState } from 'react';
import { View} from 'react-native';
import { EnhancedInput } from '../shared/Input';
import { Button } from '../shared/Button';
import { useNavigation } from '@react-navigation/native';

const RegistrationForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();
  

  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const cities = ['New York', 'London', 'Paris', 'Tokyo'];

  return (
    <View>
      <EnhancedInput
        type="text"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
        label="Full Name"
      />
      <EnhancedInput
        type="phone"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        label="Phone Number"
      />
      <EnhancedInput
        type="email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        label="Email"
      />
      <EnhancedInput
        type="country"
        value={country}
        onChangeText={setCountry}
        placeholder="Select your country"
        label="Country"
        countries={countries}
      />
      <EnhancedInput
        type="city"
        value={city}
        onChangeText={setCity}
        placeholder="Select your city"
        label="City"
        cities={cities}
      />
      <Button onPress={() => navigation.navigate("/"as never)}
      title="Register"/>
    </View>
  );
};

export default RegistrationForm;