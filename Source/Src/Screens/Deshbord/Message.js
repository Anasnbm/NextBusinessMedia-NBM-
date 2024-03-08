import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../Assets/Images/users/user-1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../Assets/Images/users/user-2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../Assets/Images/users/user-3.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../Assets/Images/users/user-4.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../Assets/Images/users/user-5.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Christy Alex',
    userImg: require('../../../Assets/Images/users/user-6.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Christy Alex',
    userImg: require('../../../Assets/Images/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Christy Alex',
    userImg: require('../../../Assets/Images/users/user-8.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const Message = () => {
  const navigation=useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{backgroundColor:'#fff',width:'90%',}} 
      onPress={()=>navigation.navigate('Chat',{ data: item })}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
  <Image source={item.userImg} style={{ height: 50, width: 50, borderRadius: 50 }} />
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 ,left:10}}>
    <Text style={styles.nametext}>{item.userName}</Text>
    <Text style={{ color: COLORS.green }}>{item.messageTime}</Text>
    
  </View>
</View>
  <Text style={{left:60,bottom:25,width:'80%'}}>{item.messageText}</Text>
</TouchableOpacity>

    )

  }
  return (
    <View style={styles.conatainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
        showsVerticalScrollIndicator={false}/>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding:15
  },
  nametext:{
    fontSize:16,
    fontWeight:'500',
    color:COLORS.black,
  }
})