// In App.js in a new project

import React, { useEffect } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './Source/Src/Test';
import Navigatior from './Source/Src/Navigation/Navigation';

import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { DataProvider } from './DataContext';
import { Provider } from 'react-redux';
import { persistor, store } from './Source/Redux/store';
const Stack = createNativeStackNavigator();
import { PersistGate } from 'redux-persist/integration/react'
function App() {

  // useEffect(() => {
  //   const getStoredQRAndSendNotification = async () => {
  //     try {
  //       const qrValue = await AsyncStorage.getItem('scannedQR');
  //       if (qrValue) {
  //         await sendNotification(qrValue);
  //         await AsyncStorage.removeItem('scannedQR');
  //       }
  //     } catch (error) {
  //       console.error('Error getting stored QR code:', error);
  //     }
  //   };

  //   const sendNotification = async (qrValue) => {
  //     try {
  //       await messaging().send({
  //         data: {
  //           title: 'New QR Code Scanned!',
  //           body: `QR Code: ${qrValue}`,
  //         },
  //         topic: 'all',
  //       });
  //     } catch (error) {
  //       console.error('Error sending notification:', error);
  //     }
  //   };

  //   getStoredQRAndSendNotification();

  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     console.log('FCM Message:', remoteMessage);
  //   });

  //   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);

  //   const getFcmToken = async () => {
  //     try {
  //       const newFcmToken = await messaging().getToken();
  //       console.log(newFcmToken);
  //       return newFcmToken;
  //     } catch (error) {
  //       console.error(error);
  //       return null;
  //     }
  //   };
  // React.useEffect(()=>{
  // getFcmToken()
  // const unsubscribe = messaging().onMessage(async remoteMessage => {
  //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  // });

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  // messaging().getInitialNotification(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  // return unsubscribe;
  // },[])
  // useEffect(() => {
  //   // Request permission to post notifications
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((result) => {
  //     if (result === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Notification permission granted');
  //     } else {
  //       console.log('Notification permission denied');
  //     }
  //   });
  // }, []);
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DataProvider>
          <Navigatior />
          <FlashMessage position="top" />
        </DataProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;