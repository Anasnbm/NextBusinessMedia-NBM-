import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, Font } from '../../Theme/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Chat = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])
    const renderend = (props) => {
       return(
        <Send {...props}>
           <View>
            <MaterialCommunityIcons name={'send-circle'} size={30} color={COLORS.green} style={{marginBottom:10,marginRight:5}} />

         
           </View>
        </Send>
       )
        
      };
    const route = useRoute()
    const data = route.params.data;
    // console.log(data);
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:10 }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../../Assets/Images/left-arrow.png')} style={{ height: 25, width: 25, }} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', right: 70, alignItems: 'center' }}>
                    <Image source={data.userImg} style={{ height: 40, width: 40, resizeMode: 'contain', borderRadius: 50 }} />
                    <Text style={styles.text}>{data.userName}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../Assets/Images/info.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                </TouchableOpacity>
                
            </View>
            {/*=================================== chat---------------------------------- */}
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                placeholder="Type a message..."
             alwaysShowSend={true}
                 isKeyboardInternallyHandled={true}
               inverted={true}
               renderSend={renderend}
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Font.regular,
        left: 10
    }
})
// import { StyleSheet, Text, View } from 'react-native'
// import React ,{ useEffect ,useState,useCallback}from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// const Chat = () => {
//      const [messages, setMessages] = useState([])

//     useEffect(() => {
//       setMessages([
//         {
//           _id: 1,
//           text: 'Hello developer',
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'React Native',
//             avatar: 'https://placeimg.com/140/140/any',
//           },
//         },
//       ])
//     }, [])
  
//     const onSend = useCallback((messages = []) => {
//       setMessages(previousMessages =>
//         GiftedChat.append(previousMessages, messages),
//       )
//     }, [])
//   return (

// <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />

//   )
// }

// export default Chat

// const styles = StyleSheet.create({})