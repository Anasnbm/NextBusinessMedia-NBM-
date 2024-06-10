import { Image, StyleSheet, Text, View, Linking, Dimensions, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, CommonStyles, Font } from '../../Theme/Colors'
import { useRoute } from '@react-navigation/native'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/core'
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../Component/CommunButton/CustomButton'
import { DataContext } from '../../../../DataContext'
import EventMap from '../Events/EventMap'
const height = Dimensions.get('window').height
const Weight = Dimensions.get('window').width
const DetailsInformation = () => {
  const navigation = useNavigation()
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'Comming Soon', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  const route = useRoute()
  const { BgImage, City, Location, TexT, date, name, organizer, time, companey, Description, webSite, email, Linkdin, userName, image2, Conferencename } = route.params.data

  // console.log('apijdhgddjhsh----', route.params.data)
  // const Rederdata=route.params.data
  const { selectedId, getBgColor } = useContext(DataContext);
  const bgColor = getBgColor()
  const handleEmailPress = () => {
    const email = email; // Replace with the desired email address
    const subject = 'Example Subject'; // Replace with the desired subject
    const body = 'Example Body'; // Replace with the desired email body

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url)
      .catch((error) => {
        console.error('Error opening email:', error);
      });
  };
  return (
   
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <StatusBar translucent={true} backgroundColor={bgColor} />
      <CustomHeader back={true} left={true} bgColor={bgColor}/>
      <ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: image2 }}
          resizeMode={'stretch'} style={{ height: height * 0.3, width: "100%" }}

        />
        <View style={{ position: 'absolute', padding: 10, top: 10 }}>
          <CustomHeader back={true} left={true} OnPress={() => navigation.goBack()} textcolor={true}>
          </CustomHeader>
        </View>

        <View style={[styles.BoxOnImage,
        { shadowColor: bgColor }
        ]}>
          <Image source={require('../../../Assets/Images/SeeAll.png')}
            style={{ height: '100%', width: 130, resizeMode: 'contain' }} />
          <Text style={[styles.normalText, { color: COLORS.black }]}>997+ People </Text>
          <TouchableOpacity style={[styles.innerbtn,
          { backgroundColor: bgColor }
          ]}
            onPress={createTwoButtonAlert}>
            <Text style={styles.normalText}>Invite</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 15, marginTop: 70, }}>
          {/* <Text style={{fontSize:18,fontWeight:'800',fontFamily:Font.regular,color:COLORS.black}}>{userName}</Text> */}
          <View style={{}}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={[styles.text, { marginTop: 10, textAlign: 'justify' }]}>{Description}</Text>
            <View style={{marginBottom:30}}>
            <View style={styles.rOWData}>
            <Text style={styles.bOldText}>Companey Name:</Text>
            <Text style={styles.text}>Mobiloitte.com</Text>
            </View>
            <View style={styles.rOWData}>
            <Text style={styles.bOldText}>Companey Phone:</Text>
            <Text style={styles.text}>+91 9012120912</Text>
            </View>
            <View style={styles.rOWData}>
            <Text style={styles.bOldText}>Companey Address:</Text>
            <Text style={styles.text}>United State</Text>
            </View>
           </View>
            <View style={styles.cardCounainer}>

              <View style={{ flexDirection: 'row', justifyContent: "space-between", bottom: 10, marginTop: 10 }}>
                <TouchableOpacity style={styles.sent} onPress={() => {
                  Linking.openURL(webSite)
                }}>

                  <Image source={require('../../../Assets/Images/world-wide-web.png')}
                    style={{ height: 30, width: 30 }} />
                  <Text style={CommonStyles.text}>Website</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sent}
                  onPress={() => {
                    Linking.openURL(Linkdin)
                  }} >

                  <Image source={require('../../../Assets/Images/linkedin.png')}
                    style={{ height: 30, width: 30 }} />
                  <Text style={CommonStyles.text}>Linkedin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sent} onPress={handleEmailPress}>
                  <Image source={require('../../../Assets/Images/mail.png')} style={{ height: 30, width: 30 }} />
                  <Text style={CommonStyles.text}>Email</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>{Conferencename}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <View style={[styles.ImageContainer,
              { backgroundColor: bgColor }
              ]}>
                <Image source={require('../../../Assets/Images/calendar.png')}
                  style={{ height: 25, width: 25, tintColor: COLORS.white, }} />
              </View>
              <View>
                <Text style={styles.value}>{date}</Text>
                <Text style={styles.label}>{time}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <View style={[styles.ImageContainer,
              { backgroundColor: bgColor }
              ]
              }
              >
                <Image source={require('../../../Assets/Images/location.png')}
                  style={{ height: 25, width: 25, tintColor: COLORS.white, }} />
              </View>
              <View>
                <Text style={styles.value}>{Location}</Text>
                <Text style={styles.label}>{City}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 ,marginBottom:20}}>
              <View style={[styles.ImageContainer,
              { backgroundColor: bgColor }
              ]}>
                <Image source={require('../../../Assets/Images/InterNetLogo.png')}
                  style={{ height: 25, width: 25, tintColor: COLORS.white, borderRadius: 10 }} />
              </View>
              <View>
                <Text style={styles.value}>{organizer}</Text>
                <Text style={styles.label}>{companey}</Text>
              </View>
            </View>
           <EventMap/>
          </View>

          {/* <View style={{marginTop:30}}>
         <CustomButton 
         title={'BY PASSES'}
          borderColor={bgColor}
          bgColor={bgColor}
          onPress={()=>navigation.navigate('CoformationPayment')}/>
         </View> */}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsInformation

const styles = StyleSheet.create({

  sent: {
    alignItems: 'center',
    gap: 10

  },
  cardCounainer: {

    paddingHorizontal: 15,
    paddingBottom: 10
  },
  safecontainer: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  headerText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Font.regular
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: Font.regular,
    color: COLORS.black
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
    // marginBottom: 16,
    color: COLORS.black,
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
    top: 190,
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
  },rOWData:{
    flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10
  },
  bOldText:{
    color:COLORS.black,
    fontSize:14,
    fontWeight:'700'
  }
})
