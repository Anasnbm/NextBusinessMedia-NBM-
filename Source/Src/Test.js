import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';

const Test = () => {

const registerUser = async (userData) => {
  const url = 'http://3.77.200.124:3002/api/auth/register';
  try {
    const response = await axios.post(url, userData);
    console.log('Registration successful', response.data);
    return response.data;
    // console.log(response)
  } catch (error) {
    console.error('Error registering user', error.response ? error.response.data : error.message);
    throw error;
  }
};

const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Example Inc.',
  personal_phone: '1234567890',
  company_phone: '0987654321',
  password: 'password123'
};

registerUser(userData)
  .then(data => {
    // Handle successful registration
    console.log('User registered:', data);
  })
  .catch(error => {
    // Handle registration error
    console.error('Registration error:', error);
  });

  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})