import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, CommonStyles } from '../../Theme/Colors'

const UserProfile = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>

    
    <View style={styles.container}>
      <Text style={CommonStyles.boldText}>My Profile</Text>
      <Image source={require('../../../Assets/Images/user.jpg')} style={{ height: 100, width: 100, borderRadius: 65 }} />
      <Text style={CommonStyles.boldText}>vender Dusan</Text>
      <Text style={CommonStyles.text}>Product Manager At Google silicon Vally</Text>
      <Text style={CommonStyles.boldText}>abc@gmail.com</Text>
      <Text style={CommonStyles.text}>Persional Phone</Text>
      <Text style={CommonStyles.boldText}>9012128014</Text>
    </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.white,
    padding:15,
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