import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

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

const requestUserPermission = async () => {
    try {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    } catch (error) {
        console.error(error);
    }
};

const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        })
        .catch(error => console.log('Failed to get initial notification', error));

    messaging().onMessage(async remoteMessage => {
        console.log('Foreground notification:', remoteMessage);
    });
};

export {
    getFcmToken,
    requestUserPermission,
    notificationListener
};
