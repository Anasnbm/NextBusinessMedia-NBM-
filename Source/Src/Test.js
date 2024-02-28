import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './Theme/Colors';
import Message from './Screens/Deshbord/Message';
import { useNavigation } from '@react-navigation/native';

function EmptyScreen() {
  return <View />;
}

function Feed() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={<Text>Go to Root</Text>} onPress={() => navigation.navigate('Root')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Test() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Drawer.Screen name="Settings" component={EmptyScreen} />
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Message"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../Assets/Images/menu.png')}
                  style={{ marginLeft: 10, width: 20, height: 20 }}
                  tintColor={COLORS.black}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Root',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Test;
