import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { COLORS, CommonStyles, Font } from '../Theme/Colors'
import CustomHeader from '../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'


const Aboutus = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomHeader
        back={true}
        left={true} title={'About'}
        OnPress={() => navigation.goBack()} />
     <Text style={{textDecorationLine: 'underline',fontWeight:"bold",fontSize:18,color:COLORS.black}}>Who we are</Text>

      <Text style={[CommonStyles.text,{textAlign:'justify',marginTop:10}]}>AgriNext Conference is owned and endorsed by InternetShine Corp,
        USA. It was established with the aim of creating a virtual hub and rendezvous
        for the global agricultural technology sector, offering a unified platform for
        tech start-ups, SMEs, established tech providers, investors, institutions, and
        other stakeholders to connect and engage collectively.
        The conference covers an array of topics, including agricultural security, \
        precision farming, sustainable practices, and technological innovations in the
        agriculture sector. We aspire for AgriNext Conference to serve as a platform for
        entrepreneurs, investors, innovators, practitioners, and enthusiasts to exchange insights,
        build alliances, and gain knowledge from one another.</Text>

        <Text style={{textDecorationLine: 'underline',fontWeight:"bold",fontSize:18,color:COLORS.black}}>Who Attends</Text>
      <Text style={[CommonStyles.text,{textAlign:'justify',marginTop:10}]}>The AgriNext
       Conference, organized by InternetShine Technologies and Next Business Media, 
       is a premier gathering set to take place at the luxurious Crowne Plaza Dubai – 
       Festival City on November 13-14, 2024. This pioneering event welcomes a
        diverse audience encompassing professionals, entrepreneurs, researchers, and 
        enthusiasts from the Agriculture Technology sector. Attendees will include 
        innovators and leaders in agtech, farmers exploring cutting-edge solutions, 
        investors seeking investment opportunities, government representatives interested 
        in agricultural advancements, technology providers showcasing their latest 
        offerings, and academics contributing to the field of agribusiness. The 
        AgriNext Conference provides a unique platform for collaboration, 
        knowledge exchange, and networking within the dynamic landscape of 
        agricultural technology. Whether you are a seasoned professional, a startup
         entrepreneur, or someone passionate about the intersection of agriculture and 
         technology, AgriNext is the definitive destination to be inspired, informed, 
         and engaged in the future of agtech. Join us in Dubai for two days of insightful 
         sessions, groundbreaking exhibitions, and unparalleled networking opportunities 
         that will shape the future of Agriculture Technology. agtech. about industry
          trends and developments.</Text>
          <Text style={{textDecorationLine: 'underline',fontWeight:"bold",fontSize:18,color:COLORS.black,marginTop:10}}>For Enquery</Text>
         <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15,rowGap:10}}>
         <View>
            <Text style={styles.heading}>Speaker & Media​</Text>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/mail.png')} style={{height:30,width:30}}/>
              <Text  style={styles.text}>abc@gmail.com</Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/user.png')} style={{height:30,width:30}}/>
             <Text  style={styles.text}>Jamshed ali </Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/whatsapp.png')} style={{height:30,width:30}}/>
           <Text  style={styles.text}>9012128014</Text>
            </View>
           </View>
           <View>
            <Text style={styles.heading}>Awards​</Text>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/mail.png')} style={{height:30,width:30}}/>
              <Text  style={styles.text}>abc@gmail.com</Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/user.png')} style={{height:30,width:30}}/>
             <Text style={styles.text}>Jamshed ali </Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/whatsapp.png')} style={{height:30,width:30}}/>
           <Text style={styles.text}>9012128014</Text>
            </View>
           </View>
         </View>
         <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15,paddingBottom:30}}>
         <View>
            <Text style={styles.heading}>General​</Text>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/mail.png')} style={{height:30,width:30}}/>
              <Text style={styles.text}>abc@gmail.com</Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/user.png')} style={{height:30,width:30}}/>
             <Text style={styles.text}>Jamshed ali </Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/whatsapp.png')} style={{height:30,width:30}}/>
           <Text style={styles.text}>9012128014</Text>
            </View>
           </View>
           <View>
            <Text style={styles.heading}>Exhibitor & Sponsor​</Text>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/mail.png')} style={{height:30,width:30}}/>
              <Text style={styles.text}>abc@gmail.com</Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/user.png')} style={{height:30,width:30}}/>
             <Text style={styles.text}>Jamshed ali </Text>
            </View>
            <View style={styles.enqurycontainer}>
              <Image source={require('../../Assets/Images/whatsapp.png')} style={{height:30,width:30}}/>
           <Text style={styles.text}>9012128014</Text>
            </View>
           </View>
         </View>

    </ScrollView>
  )
}

export default Aboutus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10
  },
  enqurycontainer:{
    flexDirection:'row',
    gap:30,
    alignItems:'center',
    marginTop:10

  },
  text:{
    fontSize:14,
    color:COLORS.black,
    fontFamily:Font.regular
  },
  heading:{
    fontSize:16,
    fontWeight:'bold',
    fontFamily:Font.regular
  }

})