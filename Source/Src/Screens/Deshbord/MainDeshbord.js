import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar ,TextInput} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Message from './Message';
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfile from './UserProfile';
import Conferences from './Conferences';
import { COLORS, Font } from '../../Theme/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpcommingEvents from './UpcommingEvents';
import Aboutus from '../Aboutus';
import Agenda from './Agenda';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MyTicket from '../Events/MyTicket';
import EventMap from '../Events/EventMap';
import EventList from '../Events/EventList';
import QRScanner from '../Events/QrCodeScanner';
import SignOut from '../SignOut';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function EmptyScreen() {
  return <View />;
}

const HomeHeader = ({ navigation, bgColor }) => {
  // console.log('======',bgColor)
  const [text, setText] = useState('');

  return (
    <View style={{backgroundColor: COLORS.white}}>
      <View style={[styles.containerHead, { backgroundColor: bgColor }]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../../Assets/Images/menu.png')}
              style={styles.menuIcon}
              tintColor={COLORS.white}
            />
          </TouchableOpacity>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={styles.teXT}>Current Location</Text>
            <Text style={styles.teXT}>Noida Sec 16</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../Assets/Images/notification.png')}
              tintColor={COLORS.white}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../.././Assets/Images/search.png')}
            style={styles.searchIcon} tintColor={COLORS.white}/>
          <TextInput
            style={{height: 50, color: COLORS.white}}
            placeholder="Search"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            placeholderTextColor={COLORS.white}
            placeholderStyle={styles.placeholderStyle}
          />
        </View>
      </View>
    </View>
  );
};

const MainDeshbord = () => {
  const [bgColor, setBgColor] = useState('');
  const route = useRoute();
  
  useEffect(() => {
    if (route.params?.bgColor) {
      setBgColor(route.params.bgColor);
    }
  }, [route.params?.bgColor]);

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => (
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} backgroundColor={bgColor} />
          <View style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: "center",
            borderBottomColor: COLORS.black,
            borderBottomWidth: 1,
            backgroundColor: bgColor
          }}>
            <Image
              source={require('../../../Assets/Images/userimage.jpg')}
              style={{ height: 100, width: 100, borderRadius: 65 }} />
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
    >
      <Drawer.Screen name="Home">
        {() => <BottomTab bgColor={bgColor} />}
      </Drawer.Screen>
      <Drawer.Screen name="Agenda" component={Agenda} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="view-agenda"
            // color={color}
            size={size}
          />
        ),
      }} />
      <Drawer.Screen name="MyTicket" component={MyTicket} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="ticket-confirmation"
            // color={color}
            size={size}
          />
        ),
      }} />
      <Drawer.Screen name="Calender" component={UpcommingEvents} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" 
          // color={color} 
          size={size} />
        ),
      }} />
      <Drawer.Screen name="QRScanner" component={QRScanner} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar"
          //  color={color} 
           size={size} />
        ),
      }} />
      <Drawer.Screen name="Aboutus" component={Aboutus} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="alpha-a-box" 
          // color={color} 
          size={size} />
        ),
      }} />
      <Drawer.Screen name="Signout" component={SignOut} options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-replace-outline" 
          // color={color} 
          size={size} />
        ),
      }} />
    </Drawer.Navigator>
  );
}

function BottomTab({ bgColor }) {
  const navigation = useNavigation();
  
  return (
    <>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          showLabel: true,
          tabBarInactiveTintColor: COLORS.faint,
          tabBarActiveTintColor: bgColor,
          tabBarLabelStyle: {
            fontWeight: "500",
            bottom: 8,
            fontSize: 13
          },
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 1,
            height: 60,
            ...styles.shadow
          },
          headerStyle: {
            backgroundColor:bgColor
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: true,
          title: 'Home',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: Font.bold
          },
          headerTitleAlign: 'center',
          header: (props) => <HomeHeader {...props} bgColor={bgColor}/>,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="home-outline" color={focused ? bgColor : COLORS.faint} size={30} />
          ),
        }} />
        <Tab.Screen name="Event" component={EventList} options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="emoji-events"
              color={focused ? bgColor : COLORS.faint} size={25} />
          ),
          title: 'Event',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: Font.bold
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Message')}>
              <Image
                source={require('../../../Assets/Images/notification.png')}
                tintColor={COLORS.white}
                style={{ marginRight: 15, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../Assets/Images//left-arrow.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),
          
        }}
        initialParams={{ bgColor }}
    />
        <Tab.Screen name="Message" component={Message} options={{
          tabBarLabel: 'Networking',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="account-multiple-plus-outline"
              color={focused ? bgColor : COLORS.faint} size={25} />
          ),
          title: 'Networking',
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: Font.bold
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../Assets/Images//left-arrow.png')}
                style={{ marginLeft: 10, width: 20, height: 20 }}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          ),
        }} />
        <Tab.Screen name="UserProfile" component={UserProfile}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="account"
                color={focused ? bgColor: COLORS.faint} size={25} />
            ),
            title: 'User',
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: Font.bold
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
  );
}

export default MainDeshbord;

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
  shadow: {
    shadowColor: COLORS.green,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 10
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: COLORS.green,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35
  },
  containerHead: {
    backgroundColor: COLORS.green,
    paddingHorizontal: 16,
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 20,
    paddingHorizontal: 16,
    color: COLORS.white,
    fontFamily: Font.regular,
    fontSize: 16,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  teXT: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '700',
  },
  box: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeholderStyle: {
    fontFamily: Font.regular,
    fontSize: 18, 
    color: COLORS.white
  }
});
