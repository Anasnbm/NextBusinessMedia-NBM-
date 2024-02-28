import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Message from './Message';
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfile from './UserProfile';
import Conferences from './Conferences';
import { COLORS } from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpcommingEvents from './UpcommingEvents';
import Aboutus from '../Aboutus';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function EmptyScreen() {
  return <View />;
}

function Feed() {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={<Text>Go to Root</Text>} onPress={() => navigation.navigate('Root')} />
    </View>
  );
}



const MainDeshbord = () => {


  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => {
      return (
        <SafeAreaView>


          <View style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: "center",
            borderBottomColor: COLORS.black,
            borderBottomWidth: 1,
            backgroundColor: '#34ebde'
          }}>
            <Image source={require('../../../Assets/Images/user.jpg')} style={{ height: 100, width: 100, borderRadius: 65 }} />
          </View>
          <DrawerItemList{...props} />
        </SafeAreaView>
      )
    }}>
      <Drawer.Screen name="Home" component={BottomTab} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-outline" color={color} size={size} />
        ),
      }} />
     
      {/* <Drawer.Screen name="Settings" component={EmptyScreen} /> */}
      <Drawer.Screen name="Calender" component={UpcommingEvents}  options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={size} />
        ),
      }} />
       <Drawer.Screen name="Aboutus" component={Aboutus}  options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="alpha-a-box" color={color} size={size} />
        ),
      }} />
       <Drawer.Screen name="Signout" component={EmptyScreen} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-replace-outline" color={color} size={size} />
        ),
      }} />
    </Drawer.Navigator>
  );
}
function BottomTab() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={COLORS.green} barStyle={'dark-content'} />
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        // headerShown: false,
        tabBarInactiveTintColor: COLORS.faint,
        tabBarActiveTintColor: COLORS.black,
        tabBarLabelStyle: {
          fontWeight: "500",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          borderTopColor: COLORS.black,

          borderWidth: 1,
        },

        headerStyle: {
          backgroundColor: COLORS.green,

        },
        headerBackgroundContainerStyle: {
          backgroundColor: 'transparent',

        }
      }
      } >
        <Tab.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: COLORS.green,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (

            <TouchableOpacity onPress={() => navigation.openDrawer()} >

              <Image
                source={require('../../../Assets/Images//menu.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>

              <Image
                source={require('../../../Assets/Images/notification.png')} tintColor={COLORS.white}
                style={{ marginRight: 10, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
          // You can add headerRight for a right-side icon similarly
        }} />
        <Tab.Screen name="Conferences" component={Conferences} options={{
          tabBarLabel: 'Conferences',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-multiple-plus-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Message" component={Message}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="comment-text" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="UserProfile" component={UserProfile}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator></>
  )
}

export default MainDeshbord

const styles = StyleSheet.create({})