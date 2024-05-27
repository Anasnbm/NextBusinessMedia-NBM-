import axios from 'axios';
const BaseUrl = 'http://3.77.200.124:3002/api';
export const registerUser = async (userData) => {
  const url = `${BaseUrl}/auth/register`;
  try {
    const response = await axios.post(url, userData);
    console.log('Registration successful', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Example usage
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
