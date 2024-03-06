import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, CommonStyles } from '../../Theme/Colors'

const UserProfile = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>

    
    <View style={styles.container}>
     
      <View style={{height:'50%',backgroundColor:COLORS.green,width:'100%',padding:20,alignItems:'center',borderRadius:15}}>

      <Image source={require('../../../Assets/Images/userimage.jpg')} style={{ height: 120, width: 120, borderRadius:100 }} />
      <Text style={[CommonStyles.boldText,{fontSize:20,marginTop:10}]}>Vender Dusan</Text>
      <Text style={CommonStyles.boldText}>Product Manager At Google silicon Vally</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',gap:20,marginTop:10}}>
     <Image source={require('../../../Assets/Images/mail.png')} style={{height:30,width:30,resizeMode:'contain'}}/>
      <Text style={CommonStyles.boldText}>abc@gmail.com</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',gap:20,marginTop:10}}>
     <Image source={require('../../../Assets/Images/location.png')} style={{height:30,width:30,resizeMode:'contain'}}/>
      <Text style={CommonStyles.boldText}>Indai   (110026) </Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',gap:20,marginTop:10}}>
     <Image source={require('../../../Assets/Images/whatsapp.png')} style={{height:30,width:30,resizeMode:'contain'}}/>
      <Text style={CommonStyles.boldText}>+91 9012128014</Text>
      </View>
    </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    backgroundColor:COLORS.white,
    // padding:15,
    alignItems:'center',
    borderRadius:12,
    margin:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
  }
})