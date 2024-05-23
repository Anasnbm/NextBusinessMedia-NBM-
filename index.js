// // /**
// //  * @format
// //  */

// // import {AppRegistry} from 'react-native';
// // import App from './App';
// // import {name as appName} from './app.json';
// // import 'react-native-gesture-handler';
// // import messaging from '@react-native-firebase/messaging'
// // messaging().setBackgroundMessageHandler(async remoteMessage => {
// //     console.log('Message handled in the background!', remoteMessage);
// //   });
// //   messaging().getInitialNotification(async remoteMessage => {
// //     console.log('Message handled in the Kill Mode!', remoteMessage);
// //   });
// // AppRegistry.registerComponent(appName, () => App);

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import 'react-native-gesture-handler';
// import messaging from '@react-native-firebase/messaging';
// import { Notifee } from '@notifee/react-native';
// AppRegistry.registerComponent(appName, () => {
//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     await Notifee.displayNotification(remoteMessage.notification);
//   });
//   messaging()
//     .getInitialNotification(async remoteMessage => {
//       console.log('Message handled in the Kill Mode', remoteMessage);
//     })
    
//   return App;
// });



import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);