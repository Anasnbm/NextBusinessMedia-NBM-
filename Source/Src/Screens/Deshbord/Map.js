import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'

const MapContainer = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <CustomHeader back={true} left={true} title={'Map'} OnPress={()=>navigation.goBack()}/>
      <Text>Map</Text>
    </View>
  )
}

export default MapContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:15
    }

})