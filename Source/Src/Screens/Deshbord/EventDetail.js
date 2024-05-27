import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, Font } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import CustomButton from '../../Component/CommunButton/CustomButton'

const EventDetail = () => {
  const navigation = useNavigation()
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'Comming Soon', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const route = useRoute()
  const { BgImage, City, Location, TexT, date, name, organizer, time, companey,CommonColor } = route.params

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={{}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <Image source={BgImage} style={styles.BoxImage} />
        <View style={{ position: 'absolute', padding: 10, top: 40 }}>
          <CustomHeader back={true} left={true} OnPress={() => navigation.goBack()} textcolor={true}>
          </CustomHeader>
        </View>
        <View style={[styles.BoxOnImage,{shadowColor:CommonColor}]}>
          <Image source={require('../../../Assets/Images/SeeAll.png')}
            style={{ height: '100%', width: 130, resizeMode: 'contain' }} />
          <Text style={[styles.normalText, { color: COLORS.black }]}>997+ People </Text>
          <TouchableOpacity style={[styles.innerbtn,{backgroundColor:CommonColor}]}
          onPress={createTwoButtonAlert}>
            <Text style={styles.normalText}>Invite</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{TexT}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <View style={[styles.ImageContainer,{backgroundColor:CommonColor}]}>
              <Image source={require('../../../Assets/Images/calendar.png')}
                style={{ height: 25, width: 25, tintColor: COLORS.white, }} />
            </View>
            <View>
              <Text style={styles.value}>{date}</Text>
              <Text style={styles.label}>{time}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <View style={[styles.ImageContainer,{backgroundColor:CommonColor}]}>
              <Image source={require('../../../Assets/Images/location.png')}
                style={{ height: 25, width: 25, tintColor: COLORS.white, }} />
            </View>
            <View>
              <Text style={styles.value}>{Location}</Text>
              <Text style={styles.label}>{City}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <View style={[styles.ImageContainer,{backgroundColor:CommonColor}]}>
              <Image source={require('../../../Assets/Images/InterNetLogo.png')}
                style={{ height: 25, width: 25, tintColor: COLORS.white, borderRadius: 10 }} />
            </View>
            <View>
              <Text style={styles.value}>{organizer}</Text>
              <Text style={styles.label}>{companey}</Text>
            </View>
          </View>
           <View style={{marginTop:30}}>
           <CustomButton bgColor={CommonColor} title={'BY PASSES'}
            borderColor={CommonColor}
            onPress={()=>navigation.navigate('CoformationPayment')}/>
           </View>
        </View>
     
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventDetail

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: Font.regular,
    color:COLORS.black
  },
  BoxImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 16,
    resizeMode: 'stretch'
  },
  text: {
    fontSize: 12,
    marginBottom: 16,
    color:COLORS.black,
    fontFamily: Font.regular
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Font.regular
  },
  value: {
    fontWeight: 'normal',
    fontSize: 16,
    color: COLORS.black,
    fontFamily: Font.regular
  },
  BoxOnImage: {
    flex: 1,
    height: 80,
    width: '80%',
    // borderWidth: 1,
    alignSelf: 'center',
    position: 'absolute',
    top: 140,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
  },
  innerbtn: {
    height: 30,
    width: 60,
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    right: 8
  },
  normalText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: Font.regular,
    fontWeight: '500'
  }, ImageContainer: {
    height: 40, width: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
