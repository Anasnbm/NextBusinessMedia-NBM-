import { StatusBar, StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../../Component/Commonheader/CustomHeader'



const data=[
  {
  id: 1,
  Icon:require('../../../Assets/Images/Speaker.jpg'),
  Locationimage: require('../../../Assets/Images/location.png'),
  Location: 'Crowne Plaza Festival City Dubai',
  image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
  Heartimage: require('../../../Assets/Images/heartBlack.png'),
  HeartimageRed: require('../../../Assets/Images/heartRed.png'),
  Heading:'AgriNext Awards, Conference & Expo',
  dateEvent:'10:22 AM 22-November-2024',
  Money:'$500',
  screen:'EventMap'
},
{
  id: 2,
  Icon:require('../../../Assets/Images/Speaker.jpg'),
  Locationimage: require('../../../Assets/Images/location.png'),
  Location: 'Crowne Plaza Festival City Dubai',
  image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
  Heartimage: require('../../../Assets/Images/heartBlack.png'),
  HeartimageRed: require('../../../Assets/Images/heartRed.png'),
  Heading:'PropNext Awards, Conference & Expo',
  dateEvent:'10:22 AM 22-November-2024',
  Money:'$500',
  screen:'EventMap'
},

]

const MyTicket = () => {
  const navigation=useNavigation()
  const renderItem=({item,index})=>{
    return(
      <TouchableOpacity style={styles.Box} activeOpacity={0.5}
      onPress={() => navigation.navigate('SuccessFulPayment')}>
        <Image source={item.Icon} style={styles.BigIcon}/>
       

       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <View style={{}}>
        <Text style={styles.Coference}>{item.Heading}</Text>
        <View style={styles.location}>
         <Image source={item.Locationimage} style={styles.LocImage}/>
         <Text style={[styles.LocText,{left:20}]}>{item.Location}</Text>
        </View>
        <View style={styles.DateMoney}>
          <Text style={styles.LocText}>{item.dateEvent}</Text>
        </View>

        </View>
        <Image source={require('../../../Assets/Images/qr-code.png')} style={{height:50,width:50}}/>
       </View>
    
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
        <StatusBar translucent={false}/>
        <CustomHeader back={true} left={true} title={'Ticket List'}
        OnPress={()=>navigation.goBack()}/>
      <FlatList

      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      />
      
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:15
        
    },
    Box:{
    //  backgroundColor:'red',
     borderWidth:0.5,
    //  
    borderRadius:10,
marginTop:15
    },
    BigIcon:{
      height:80,
      width:'100%',
      resizeMode:'stretch',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    location:{
      flexDirection:"row",
       alignItems:'center',
       marginTop:5
    },
    LocImage:{
      height:15,
      width:15,
      left:10
    },
    LocText:{
      color:COLORS.black,
      fontFamily:Font.regular,
     fontSize:14,
    //  left:10
    },
    Coference:{
    //   position:'absolute',
    // bottom:60,
    // color:COLORS.white,
    fontWeight:'800',
    fontSize:16,
    paddingLeft:10
    },
    DateMoney:{
      flexDirection:"row",
       alignItems:'center',
       marginTop:5,
       justifyContent:'space-between',
       paddingHorizontal:10,
       paddingBottom:5
    }
})

export default MyTicket
