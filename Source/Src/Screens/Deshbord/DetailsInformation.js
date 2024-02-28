import { Image, StyleSheet, Text, View, Linking, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, CommonStyles } from '../../Theme/Colors'
import { useRoute } from '@react-navigation/native'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context'
const height = Dimensions.get('window').height
const Weight = Dimensions.get('window').width
const DetailsInformation = () => {
  const navigation = useNavigation()
  const route = useRoute();
  // console.log('apijdhgddjhsh----', route.params.data.thumbnail)
  return (
    <SafeAreaView style={styles.safecontainer}>


      <Image
        source={require('../../../Assets/Images/Speaker.jpg')}
        resizeMode={'cover'} style={{ height: height * 0.2, width: Weight }}
      />
      <View style={{ position: 'absolute', padding: 10 }}>

        <CustomHeader back={true} left={true} onPress={() => navigation.goBack()} />
      </View>
      <View style={{bottom:45, paddingHorizontal: 15,}}>
        <Image source={{ uri: route.params.data.thumbnail }} style={{ height: 100, width: 100,borderRadius:15 }} />
        <Text style={CommonStyles.boldText}>{route.params.data.title}</Text>
        <Text style={CommonStyles.text}>{route.params.data.description}</Text>
      </View>

      <View style={styles.cardCounainer}>

        <View style={{ flexDirection: 'row', justifyContent: "space-between",bottom:10 }}>
          <View style={styles.sent}>

            <Image source={require('../../../Assets/Images/world-wide-web.png')}
              style={{ height: 30, width: 30 }} />
            <Text onPress={() => {
              Linking.openURL('https://agrinextcon.com/speaker/megumi-avigail-yoshitomi/')
            }}  style={CommonStyles.text}>
            Website</Text>
          </View>
          <View style={styles.sent}>

            <Image source={require('../../../Assets/Images/linkedin.png')}
              style={{ height: 30, width: 30 }} />
            <Text onPress={() => {
              Linking.openURL('https://agrinextcon.com/speaker/megumi-avigail-yoshitomi/')
            }}  style={CommonStyles.text}>
              Linkedin</Text>
          </View>
          <View style={styles.sent}>

            <Image source={require('../../../Assets/Images/mail.png')}
              style={{ height: 30, width: 30 }} />
            <Text onPress={() => {
              Linking.openURL('https://agrinextcon.com/speaker/megumi-avigail-yoshitomi/')
            }} style={CommonStyles.text}>
              Email</Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal:15}}>
        <Text style={CommonStyles.boldText}>About</Text>
     <Text style={CommonStyles.text}>Megumi Avigail Yoshitomi is the 
      President of the Japan Association for Cellular Agriculture
      , a non-profit thinktank for cellular agriculture policy 
      in Japan. She is one of the advisory boards for the
       Ministry of Economy, Trade and Industry’s strategy to
        promote the biotechnology industry in Japan. She is the 
        Secretary General of "Cellular Agriculture Working Team"
         under the Food-tech Public-Private Council, hosted by 
         the Ministry of Agriculture, Forestry, and Fisheries. 
         She is also awarded Forbes Japan 30 Under 30 in 2020 as 
         one of the “Law and Policy” leaders.</Text>
      </View>

    </SafeAreaView>
  )
}

export default DetailsInformation

const styles = StyleSheet.create({

  sent: {
    alignItems: 'center',
    gap:10

  },
  cardCounainer:{

  paddingHorizontal: 15,
  paddingBottom:10
  },
  safecontainer: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})
