import * as React from 'react';
import { View, Text,styles } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from '../Test';
import SpleshScreen1 from '../Screens/SpleshScreen1';
import CustomButton from '../Component/CommunButton/CustomButton';
import Test1 from '../Test1';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Deshbord from '../Screens/Deshbord/Deshbord';
import DeshbordVenue from '../Screens/Deshbord/DeshbordVenue';
import MainDeshbord from '../Screens/Deshbord/MainDeshbord';
import DetailsInformation from '../Screens/Deshbord/DetailsInformation';
import ApiData from '../ApiData';
import UpcommingEvents from '../Screens/Deshbord/UpcommingEvents';
import { Calendar } from 'react-native-calendars';
import MyCalendar from '../Screens/Deshbord/Mycalender';
import MapContainer from '../Screens/Deshbord/Map';
import Message from '../Screens/Deshbord/Message';
import Chat from '../Screens/Deshbord/Chat';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import EmailVarification from '../Screens/ForgetPassword/EmailVarification';
import ResetPassword from '../Screens/ForgetPassword/ResetPassword';
const Stack = createNativeStackNavigator();
const Navigatior = ({screens}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName='Test'>
       
        {/* ******************************* Splesh Screen ******************************************** */}
        <Stack.Screen name="SpleshScreen1" component={SpleshScreen1} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        {/* ----------------------------------------Deshbord Section ----------------------- */}
        <Stack.Screen name="Deshbord" component={Deshbord} />
        <Stack.Screen name="DeshbordVenue" component={DeshbordVenue} />
        <Stack.Screen name="MainDeshbord" component={MainDeshbord} />
        <Stack.Screen name="DetailsInformation" component={DetailsInformation} />
        <Stack.Screen name="UpcommingEvents" component={UpcommingEvents} />
        <Stack.Screen name="MyCalendar" component={MyCalendar} />
        <Stack.Screen name="MapContainer" component={MapContainer} />
        {/* --------------------chat Section --------------------------------- */}
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Chat" component={Chat} />

        {/*----------------------------------Foreget Password------------- */}
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailVarification" component={EmailVarification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

       
        {/* -------------------------Test Purpose---------------------- */}
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="ApiData" component={ApiData} />

        
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigatior

// const styles = StyleSheet.create({})