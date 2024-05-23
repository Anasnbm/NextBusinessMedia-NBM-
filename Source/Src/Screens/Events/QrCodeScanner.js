import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { COLORS } from '../../Theme/Colors';

const QRScanner = () => {
  const [qrValue, setQrValue] = useState('');
  const [light, setLight] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const scannerRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getFcmToken = async () => {
      try {
        const newFcmToken = await messaging().getToken();
        console.log(newFcmToken);
        return newFcmToken;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().getInitialNotification(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    getFcmToken();

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (qrValue) {
      onDisplayNotification();
      sendNotificationToAllDevices('New QR Code Scanned!', qrValue);
    }
  }, [qrValue]);

  const onSuccess = (e) => {
    setShowDialog(true);
    setQrValue(e.data);
  };

  const resetData = () => {
    setQrValue('');
  };

  const handleScanAgain = () => {
    setShowDialog(false);
    resetData();
    scannerRef.current.reactivate();
  };

  const onDisplayNotification = async () => {
    try {
      // Request permissions (required for iOS)
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      // Display a notification
      await notifee.displayNotification({
        title: 'New QR Code Scanned!',
        body: `QR Code: ${qrValue}`,
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  };

  const sendNotificationToAllDevices = async (title, body) => {
    try {
      await messaging().send({
        data: {
          title,
          body,
        },
        topic: 'all_devices',
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        ref={scannerRef}
        onRead={onSuccess}
        flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
        topContent={<CustomHeader back={true} left={true} title={'Scanner'} onPress={() => navigation.goBack()} />}
        bottomContent={
          <TouchableOpacity style={styles.button} onPress={() => setLight(!light)}>
            <Text style={styles.buttonText}>{`Flash ${light ? 'OFF' : 'ON'}`}</Text>
          </TouchableOpacity>
        }
      />
      {showDialog && (
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogTitle}>Scanned QR:</Text>
          <Text style={styles.dialogText}>{qrValue}</Text>
          <TouchableOpacity style={styles.dialogButton} onPress={handleScanAgain}>
            <Text style={styles.dialogButtonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  dialogContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -100 }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogText: {
    fontSize: 16,
    marginBottom: 20,
  },
  dialogButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  dialogButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
