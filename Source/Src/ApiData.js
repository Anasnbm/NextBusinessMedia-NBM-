import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'; // Import axios without curly braces

const ApiData = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response); // Log the fetched data to the console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); //
  }, []); //

  return (
    <View style={styles.container}>
      <Text>ApiData</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ApiData;
