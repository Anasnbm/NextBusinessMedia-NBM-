import { StyleSheet, Text, View,Image, FlatList, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, CommonStyles } from '../../Theme/Colors'

const Height=Dimensions.get('window').height
const Weight=Dimensions.get('window').width

const data=[
  {
    id:1,
    Image:require('../../../Assets/Images/2.png'),
    text:'CityNext Conference'
  },
  {
    id:2,
    Image:require('../../../Assets/Images/3.png'),
    text:'TransportNext Conference'
  },
  {
    id:3,
    Image:require('../../../Assets/Images/5.png'),
    text:'EnergyNext Conference'
  },
  {
    id:4,
    Image:require('../../../Assets/Images/6.png'),
    text:'FiNext Conference'
  },
  {
    id:5,
    Image:require('../../../Assets/Images/7.png'),
    text:'ProptNext Conference'
  },
]

const Conferences = () => {
  const renderItem=({item})=>{
    return(
      <TouchableOpacity style={{backgroundColor:COLORS.white,marginTop:10,borderRadius:15,borderWidth:1}}>
      <Image source={item.Image} style={{height:Height*0.1,width:Weight*0.7,borderTopLeftRadius:15}}/>
      <Text style={[CommonStyles.boldText,{left:10,padding:10}]}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      contentContainerStyle={{paddingBottom:10}}/>
    </View>
  )
}

export default Conferences

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
paddingHorizontal:15
  },
  text:{
  
  }
})