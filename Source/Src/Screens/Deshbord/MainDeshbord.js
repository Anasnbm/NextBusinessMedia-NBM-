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
import Agenda from './Agenda';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function EmptyScreen() {
  return <View />;
}





const MainDeshbord = () => {


  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => {
        return (
          <SafeAreaView>

            <View style={{
              height: 200,
              width: '100%',
              justifyContent: 'center',
              alignItems: "center",
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              backgroundColor: COLORS.green
            }}>
              <Image
                source={require('../../../Assets/Images/userimage.jpg')}
                style={{ height: 100, width: 100, borderRadius: 65 }} />
            </View>
            <DrawerItemList{...props} />
          </SafeAreaView>
        )
      }}>
      <Drawer.Screen name="Home" component={BottomTab} options={{
        drawerIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons
            name="home-outline"
            color={color}
            size={size} />
        ),
      }} />

      {/* <Drawer.Screen name="Settings" component={EmptyScreen} /> */}
      <Drawer.Screen name="Calender" component={UpcommingEvents} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Aboutus" component={Aboutus} options={{
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
      {/* <StatusBar barStyle={'dark-content'} translucent={true} /> */}
      <Tab.Navigator initialRouteName='Home'

        screenOptions={{
          showLabel: true,
          // headerShown: false,
          tabBarInactiveTintColor: COLORS.faint,
          tabBarActiveTintColor: COLORS.green,
          // tabBarAllowFontScaling:10,
          tabBarLabelStyle: {
            fontWeight: "500",
            bottom: 8,
            fontSize: 13
          },

          tabBarStyle: {
            //  borderWidth:0.5,


            backgroundColor: COLORS.white,
            borderTopWidth: 1,
            height: 60,
            ...styles.shodow
          },
          headerStyle: {
            backgroundColor: COLORS.green
          }


        }}

      >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: true,
          title: 'Home',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>

              <Image
                source={require('../../../Assets/Images/search.png')}
                 tintColor={COLORS.white}
                style={{ marginRight: 15, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (

            <TouchableOpacity onPress={() => navigation.openDrawer()} >

              <Image
                source={require('../../../Assets/Images//menu.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="home-outline" color={focused ? COLORS.green : COLORS.faint} size={focused ? 40 : 30} />
          ),
        }} />

        <Tab.Screen name="Agenda" component={Agenda} options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="calendar"
             color={focused ? COLORS.green : COLORS.faint} size={focused ? 30 : 20} />
          ),
          title: 'Agenda',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>

              <Image
                source={require('../../../Assets/Images/notification.png')} 
                tintColor={COLORS.white}
                style={{ marginRight: 15, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (

            <TouchableOpacity onPress={() => navigation.goBack()} >

              <Image
                source={require('../../../Assets/Images//left-arrow.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),

        }} />

        <Tab.Screen name="Message" component={Message} options={{
          tabBarLabel: 'Networking',

          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="account-multiple-plus-outline"
             color={focused ? COLORS.green : COLORS.faint} size={focused ? 30 : 20} />
          ),
          title: 'Networking',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>

              <Image
                source={require('../../../Assets/Images/notification.png')} 
                tintColor={COLORS.white}
                style={{ marginRight: 15, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (

            <TouchableOpacity onPress={() => navigation.goBack()} >

              <Image
                source={require('../../../Assets/Images//left-arrow.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),

        }
        } />
        <Tab.Screen name="UserProfile" component={UserProfile}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="account"
               color={focused ? COLORS.green : COLORS.faint} size={focused ? 30 : 20} />
            ),

            title: 'User',
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity>
  
                <Image
                  source={require('../../../Assets/Images/notification.png')} 
                  tintColor={COLORS.white}
                  style={{ marginRight: 15, width: 20, height: 20 }}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
  
              <TouchableOpacity onPress={() => navigation.goBack()} >
  
                <Image
                  source={require('../../../Assets/Images//left-arrow.png')}
                  style={{ marginLeft: 10, width: 20, height: 20 }}
                  tintColor={COLORS.white}
                />
              </TouchableOpacity>
            ),
  
          }} />
      </Tab.Navigator>
    </>
  )
}

export default MainDeshbord
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  shodow: {
    shadowColor: COLORS.green,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 10
  }
});