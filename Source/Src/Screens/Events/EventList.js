import { StatusBar, StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import CommonCustomCard from '../../Component/CommonCard/CommonCustomCard'
import Data from '../../Api/Data'
import { speakerData } from '../../Api/FinextData'
import { AgreeNextEventdata } from '../Deshbord/Home'
import { DataContext } from '../../../../DataContext'



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

const EventList = () => {
  const navigation=useNavigation()
  const { getBgColor } = useContext(DataContext);
  const bgColor = getBgColor();
  console.log(bgColor)
  const renderItem=({item,index})=>{
    return(
      <TouchableOpacity style={styles.Box} activeOpacity={0.5}
      onPress={() => navigation.navigate(item.screen,{data:item})}>
        <Image source={item.Icon} style={styles.BigIcon}/>
        <Text style={styles.Coference}>{item.Heading}</Text>
        <View style={styles.location}>
         <Image source={item.Locationimage} style={styles.LocImage}/>
         <Text style={[styles.LocText,{left:20}]}>{item.Location}</Text>
        </View>
        <View style={styles.DateMoney}>
          <Text style={styles.LocText}>{item.dateEvent}</Text>
          <Text  style={[styles.LocText,{color:'blue',fontSize:15,fontWeight:'600'}]}>{item.Money}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
        {/* <StatusBar translucent={false}/>
      <FlatList

      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      /> */}
        <CommonCustomCard data={AgreeNextEventdata} heading={'Upcomming Event'} RenderId={4} shadowColor={COLORS.green} />
      
    </View>
  )
}

export default EventList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingHorizontal:15
        
    },
    Box:{
    //  backgroundColor:'red',
     borderWidth:0.5,
    //  
    borderRadius:10,
// marginTop:15
    },
    BigIcon:{
      height:150,
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
      height:20,
      width:20,
      left:10
    },
    LocText:{
      color:COLORS.black,
      fontFamily:Font.regular,
     fontSize:14,
    //  left:10
    },
    Coference:{
      position:'absolute',
    bottom:60,
    color:COLORS.white,
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