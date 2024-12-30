import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, Text, Alert, View, useColorScheme, Image } from 'react-native';
import axios from 'axios'; // Import Axios
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './RegistrationScreen'; // Import the styling

const RegistrationScreen = (): React.JSX.Element => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add confirmation password state
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Handle Registration
  const handleRegister = async () => {
    // Basic Validation
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Password Confirmation Check
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // Sending POST request to the backend
      const response = await axios.post('http://10.0.2.2:5000/register', {
        username,
        email,
        password,
      });

      // Handle success
      if (response.status === 201) {
        Alert.alert('Success', 'Registration Successful!');
      }
    } catch (error) {
      // Handle error
      console.error(error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
          {/* Logo */}
          <Image
            source={require('./assets/Logo.png')} 
            style={styles.logo}
          />

          <Text style={[styles.title]}>Register</Text>

          {/* Username Input */}
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
            placeholder="Username"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
            value={username}
            onChangeText={setUsername}
          />

          {/* Email Input */}
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
            placeholder="Email"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Password Input */}
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Confirm Password Input */}
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
            placeholder="Confirm Password"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {/* Register Button */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          {/* Already have an account link */}
          <View style={styles.alreadyAccountContainer}>
            <Text style={styles.alreadyAccountText}>Already have an account?</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
