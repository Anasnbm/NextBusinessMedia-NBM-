import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Dimensions, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS, Font } from '../../Theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const data = [
  {
    id: 1,
    image: require('../../../Assets/Images/AgriNextLogo.png'), // Corrected image path
    text: 'United Arab Emirates',
    text1: 'Crowne Plaza Dubai - Festival City,',
    text2: 'Dubai Festival City - Dubai - United Arab Emirates'
  },
  {
    id: 2,
    image: require('../../../Assets/Images/AgriNextLogo.png'), // Corrected image path
    text: 'United States of America',
    text1: 'Crowne Plaza Dubai - Festival City,',
    text2: 'Dubai Festival City - Dubai - United Arab Emirates'
  },
  {
    id: 3,
    image: require('../../../Assets/Images/AgriNextLogo.png'), // Corrected image path
    text: 'United Arab Emirates',
    text1: 'Crowne Plaza Dubai - Festival City,',
    text2: 'Dubai Festival City - Dubai - United Arab Emirates'
  },
  {
    id: 4,
    image: require('../../../Assets/Images/AgriNextLogo.png'), // Corrected image path
    text: 'United States of America',
    text1: 'Crowne Plaza Dubai - Festival City,',
    text2: 'Dubai Festival City - Dubai - United Arab Emirates'
  },
];

const DeshbordVenue = () => {
  const navigation=useNavigation()
  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.Box} onPress={()=>navigation.navigate('MainDeshbord')}>
      <LinearGradient colors={['#29eb06', '#30ee00',]} style={styles.linearGradient}>
        {/* <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text> */}
     

        <Image source={item.image}
          style={{ height: Height * 0.1, width: Width * 0.3 }} resizeMode='contain' />
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text}>{item.text1}</Text>
        {/* <Text style={styles.text}>{item.text2}</Text> */}
      </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.boldText}>Venue</Text>
        <Image source={require('../../../Assets/Images/location.png')}
          style={{ height: 30, width: 30}} />

      </View>
     


      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => item.id.toString()} />
    </SafeAreaView>
  );
};

export default DeshbordVenue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    // marginTop: StatusBar.currentHeight
  },
  Box: {
    // backgroundColor: "pink",
    // borderRadius: 15,
    // marginTop: 10,
    // padding: 15
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? Font.regular : Font.medium,
    fontSize: 16,
    color: COLORS.black,

  },
  boldText: {
    fontFamily: Font.bold,
    fontSize: 18,
    color: COLORS.black,
    fontFamily: Font.bold
  },
  linearGradient: {
    flex: 1,
    padding:15,
    borderRadius:15,
    marginTop:10,
   
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
