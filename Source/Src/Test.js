import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from './Theme/Colors';
import CustomHeader from './Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const Test = () => {
  const [selected, setSelected] = useState('');
  const [eventDetails, setEventDetails] = useState([]);
const navigation=useNavigation()
  const events = {
    '2024-06-03': [
      { name: 'Event 1', color: 'red' },
      { name: 'Event 2', color: 'yellow' },
    ],
    '2024-06-04': [{ name: 'Event 3', color: 'green' }],
    '2024-06-05': [
      { name: 'Event 4', color: 'blue' },
      { name: 'Event 5', color: 'purple' },
      { name: 'Event 6', color: 'orange' },
    ],
  };

  const dot_marking = {
    '2024-06-03': { dotColor: 'red', marked: true },
    '2024-06-04': { dotColor: 'green', marked: true },
    '2024-06-05': { dotColor: 'blue', marked: true },
  };

  const periodMarking = {
    '2024-06-03': {
      startingDay: true,
      color: '#FF9999',
      textColor: 'white',
    },
    '2024-06-04': {
      color: '#FF9999',
    },
    '2024-06-05': {
      endingDay: true,
      color: '#FF9999',
      textColor: 'white',
    },
  };

  const custom_marking = {
    '2024-06-03': {
      customStyles: {
        container: {
          backgroundColor: 'red',
        },
        text: {
          color: 'white',
        },
      },
    },
    '2024-06-04': {
      customStyles: {
        container: {
          backgroundColor: 'green',
        },
        text: {
          color: 'white',
        },
      },
    },
    '2024-06-05': {
      customStyles: {
        container: {
          backgroundColor: 'blue',
        },
        text: {
          color: 'white',
        },
      },
    },
  };

  return (
    <View style={{flex:1,backgroundColor:COLORS.white,padding:15,}}>
      <View style={{marginTop:20}}>

    
      <CustomHeader back={true} left={true} OnPress={()=>navigation.goBack()}/>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
          setEventDetails(events[day.dateString] || []);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
            selectedBackgroundColor: 'purple',
          },
          ...dot_marking,
          ...periodMarking,
          ...custom_marking,
        }}
        theme={{
          selectedDayBackgroundColor: 'purple',
          selectedDayTextColor: 'white',
        }}
        periodMarking={periodMarking}
        customMarkingType="period"
      />
      {eventDetails.length > 0 && (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          {eventDetails.map((event, index) => (
            <View
              key={index}
              style={[
                styles.eventContainer,
                { backgroundColor: event.color },
              ]}
            >
              <Text style={styles.eventText}>{event.name}</Text>
            </View>
          ))}
        </View>
      )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    width:'100%',
    alignItems:'center'
  },
  eventText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Test;








