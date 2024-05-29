import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from './Theme/Colors'
import CustomHeader from './Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'

const TestingScreen = () => {
    const navigation=useNavigation(0)
  return (
    <View style={styles.container}>
        <CustomHeader back={true} left={true} textcolor={COLORS.white}
        OnPress={()=>navigation.goBack()}/>
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text style={styles.BoldText}>Comming Soon</Text>
    </View>
    </View>
  )
}

export default TestingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F3065D',
        padding:15
    },
    BoldText:{
        fontSize:25,
        fontWeight:'800',
        color:COLORS.white
    }
})