import * as React from 'react';
import { View, Text,styles } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from '../Test';
import SpleshScreen1 from '../Screens/SpleshScreen1';
import CustomButton from '../Component/CommunButton/CustomButton';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Deshbord from '../Screens/Deshbord/Deshbord';
import DeshbordVenue from '../Screens/Deshbord/DeshbordVenue';
import MainDeshbord from '../Screens/Deshbord/MainDeshbord';
import DetailsInformation from '../Screens/Deshbord/DetailsInformation';

import UpcommingEvents from '../Screens/Deshbord/UpcommingEvents';
import { Calendar } from 'react-native-calendars';
import MyCalendar from '../Screens/Deshbord/Mycalender';
import MapContainer from '../Screens/Deshbord/Map';
import Message from '../Screens/Deshbord/Message';
import Chat from '../Screens/Deshbord/Chat';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import EmailVarification from '../Screens/ForgetPassword/EmailVarification';
import ResetPassword from '../Screens/ForgetPassword/ResetPassword';
import AttendiesDetail from '../Screens/Deshbord/AttendiesDetail';

import EventList from '../Screens/Events/EventList';
import EventMap from '../Screens/Events/EventMap';
import EventPayment from '../Screens/Events/EventPayment';
import CoformationPayment from '../Screens/Events/CoformationPayment';
import SuccessFulPayment from '../Screens/Events/SuccessFulPayment';
import QrCodeScanner from '../Screens/Events/QrCodeScanner';
import TermAndConditon from '../Screens/Term&Condition/TermAndConditon';
import NotificationScreen from '../Screens/Deshbord/SwipeableList';
import CommonCustomCard from '../Component/CommonCard/CommonCustomCard';
import EventDetail from '../Screens/Deshbord/EventDetail';
import ViewPass from '../Screens/Events/ViewPass';
import TestingScreen from '../TestingScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigatior = ({screens}) => {
  const {userData}=useSelector(state=>state.auth)
  // console.log('navigationUser',userData)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName={userData ? "Deshbord":"SpleshScreen1"}>
      {/* <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName='Test'> */}
       
        {/* ******************************* Splesh Screen ******************************************** */}
        <Stack.Screen name="SpleshScreen1" component={SpleshScreen1} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        {/* ----------------------------------------Deshbord Section ----------------------- */}
        <Stack.Screen name="Deshbord" component={Deshbord} />
        <Stack.Screen name="DeshbordVenue" component={DeshbordVenue} />
        <Stack.Screen name="MainDeshbord" component={MainDeshbord} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="DetailsInformation" component={DetailsInformation} />
        <Stack.Screen name="UpcommingEvents" component={UpcommingEvents} />
        <Stack.Screen name="MyCalendar" component={MyCalendar} />
        <Stack.Screen name="MapContainer" component={MapContainer} />
        <Stack.Screen name="AttendiesDetail" component={AttendiesDetail} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        {/*------------------------------- event--------------------------------------*/}
        <Stack.Screen name="EventList" component={EventList} />
        <Stack.Screen name="EventMap" component={EventMap} />
        <Stack.Screen name="EventPayment" component={EventPayment} />
        <Stack.Screen name="CoformationPayment" component={CoformationPayment} />
        <Stack.Screen name="SuccessFulPayment" component={SuccessFulPayment} />
        {/* --------------------chat Section --------------------------------- */}
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Chat" component={Chat} />

        {/*----------------------------------Foreget Password------------- */}
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailVarification" component={EmailVarification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
{/* =====================================+===================================== */}


       
        {/* -------------------------Test Purpose---------------------- */}
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="CommonCustomCard" component={CommonCustomCard} />
        <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} />
        <Stack.Screen name="ViewPass" component={ViewPass} />
        {/* terms -------------------------- */}
        <Stack.Screen name="TermAndConditon" component={TermAndConditon} />
        <Stack.Screen name="TestingScreen" component={TestingScreen} />
   
        
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigatior

// const styles = StyleSheet.create({})
