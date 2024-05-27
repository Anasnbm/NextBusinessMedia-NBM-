import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../Component/CommunButton/CustomButton'
import { DataContext } from '../../../../DataContext'

const CoformationPayment = () => {
  const { getBgColor } = useContext(DataContext);
  const bgColor = getBgColor();
  console.log('jamshed',bgColor)
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>
      <CustomHeader back={true} left={true} title={'Confirmation'}
      OnPress={()=>navigation.goBack()}/>
      <View style={styles.containerBox}>
         <Text style={styles.textBold}>AgriNext Awards, Conference & Expo</Text>
         <Text>Visitor Name</Text>
         <Text style={styles.textBold}>Jamshed ALi</Text>
         <Text>Location</Text>
         <Text style={styles.textBold}>Noda sec 15 Noida UP</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text>TicketType</Text>
         <Text style={styles.textBold}>Special Pass</Text>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text>Date</Text>
         <Text style={styles.textBold}>12-Nov-2024 </Text>
         </View>
      </View>
         <Text style={[styles.textBold,{alignSelf:'center'}]}>Total Amount To Pay<Text style={{color:COLORS.blue}}>  $500</Text> </Text>

      <CustomButton
        title={'Confirm'}
        bgColor={COLORS.blue}
        textColor={COLORS.white}
        borderColor={COLORS.blue}
        onPress={() => navigation.navigate('SuccessFulPayment')} />
    </View>
  )
}

export default CoformationPayment

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
    padding:15
  },
  containerBox:{
    borderWidth:4,
    padding:20,
    borderColor:COLORS.blue,
    borderRadius:15
  },
  textBold:{
fontSize:14,
color:COLORS.black,
fontFamily:Font.regular,
fontWeight:'800',
lineHeight:30
  },
  NoremalText:{
    fontSize:12,
    color:COLORS.black,
    fontFamily:Font.regular,
    fontWeight:'500'
  }
})