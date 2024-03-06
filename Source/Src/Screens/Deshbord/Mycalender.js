// import React, { useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Agenda, Calendar } from 'react-native-calendars';

// const MyCalendar = () => {
//   const [selected, setSelected] = useState('');
//   const [agendaItems, setAgendaItems] = useState({});

//   // Define the period range
//   const periodRange = {
//     '2024-03-05': { startingDay: true, color: 'green', textColor: 'white' },
//     '2024-03-09': { endingDay: true, color: 'green', textColor: 'white' },
//     '2024-03-12': { startingDay: true, endingDay: true, color: 'orange', textColor: 'white' }
//   };

//   // Function to fetch agenda items for a specific date
//   const fetchAgendaItems = (day) => {
//     const items = agendaItems[day.dateString] || [];
//     return items.map((item, index) => (
//       <Text key={index}>{item.text}</Text>
//     ));
//   };

//   return (
//     <View>
//       <Calendar
//         // Customize the appearance of the calendar
//         style={{
//           borderWidth: 1,
//           borderColor: 'gray',
//           height: 350
//         }}
//         // Specify the current date
//         current={'2024-03-01'}
//         // Callback that gets called when the user selects a day
//         onDayPress={day => {
//           console.log('selected day', day);
//           setSelected(day.dateString);
//         }}
//         // Mark specific dates as marked
//         markedDates={{
//           '2024-03-01': {selected: true, marked: true, selectedColor: 'blue'},
//           '2024-03-02': {marked: true},
//           '2024-03-03': {selected: true, marked: true, selectedColor: 'blue'}
//         }}
//         theme={{ 
//           backgroundColor: '#ffffff', 
//           calendarBackground: '#ffffff', 
//           textSectionTitleColor: '#b6c1cd', 
//           selectedDayBackgroundColor: '#00adf5', 
//           selectedDayTextColor: '#ffffff', 
//           todayTextColor: '#00adf5', 
//           dayTextColor: '#2d4150', 
//           textDisabledColor: '#d9e1e8', 
//           dotColor: '#00adf5', 
//           selectedDotColor: '#ffffff', 
//           arrowColor: '#00adf5', 
//           monthTextColor: '#00adf5', 
//           indicatorColor: 'blue', 
//           textDayFontFamily: 'monospace', 
//           textMonthFontFamily: 'monospace', 
//           textDayHeaderFontFamily: 'monospace', 
//           textDayFontSize: 16, 
//           textMonthFontSize: 16, 
//           textDayHeaderFontSize: 16 
//       }} 
//       />
      
//       {/* Display agenda items for the selected date */}
//       {selected && (
//         <View>
//           <Text>Agenda for {selected}:</Text>
//           {fetchAgendaItems(selected)}
//         </View>
//       )}
//     </View>
//   );
// };

// export default MyCalendar;




import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native-animatable';
import EventCalendar from 'react-native-events-calendar';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MyCalendar = () => {
  const navigation=useNavigation()
  const [events, setEvents] = useState([
    { start: '2024-09-07 00:30:00', end: '2024-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-07 01:30:00', end: '2024-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-07 04:10:00', end: '2024-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-07 01:05:00', end: '2024-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-07 14:30:00', end: '2024-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-08 01:20:00', end: '2024-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-08 04:10:00', end: '2024-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-08 00:45:00', end: '2024-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-08 11:30:00', end: '2024-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-09 01:30:00', end: '2024-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-09 03:10:00', end: '2024-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2024-09-09 00:10:00', end: '2024-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
  ]);
  

  const eventTapped = (event) => {
    console.log('Event tapped:', event);
    // Handle event tapping
  };

  return (
    <>
    <View style={{paddingHorizontal:16}}>
      <CustomHeader left={true} title={'Calender'} back={true} OnPress={()=>navigation.goBack()}/>
    </View>
    <EventCalendar
      eventTapped={eventTapped}
      events={events}
      width={width}
      initDate={'2024-09-08'}
    />
    </>
    
  );
};

export default MyCalendar;
