import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { DataContext } from '../../DataContext';

const Test = () => {
  const { userData } = useSelector(state => state.auth);
  const { data, } = useContext(DataContext);
  // console.log( data)
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://3.77.200.124:3002/api/events/1`, {
          headers: {
            'Authorization': `Bearer ${userData.token}`
          }
        });
        setEvent(response.data);
        console.log(response)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (userData && userData.token) {
      fetchEvent();
    }
  }, [userData]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching event data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Event Details:</Text>
      <Text>{JSON.stringify(event, null, 2)}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
