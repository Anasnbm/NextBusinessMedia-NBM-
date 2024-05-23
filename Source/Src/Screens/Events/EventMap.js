import { FlatList, Image, ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { COLORS,Font } from '../../Theme/Colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const data=[
    {
    id: 1,
    Icon:require('../../../Assets/Images/Speaker.jpg'),
    Locationimage: require('../../../Assets/Images/location.png'),
    Location: 'Crowne Plaza Festival City Dubai',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    Heartimage: require('../../../Assets/Images/heartBlack.png'),
    HeartimageRed: require('../../../Assets/Images/heartRed.png'),
    Heading:'AgriNext Awards, Conference & Expo',
    dateEvent:'10:22 AM 22-November-2024',
    Money:'$500',
    screen:'EventPayment',
  },
  {
    id: 2,
    Icon:require('../../../Assets/Images/Speaker.jpg'),
    Locationimage: require('../../../Assets/Images/location.png'),
    Location: 'Crowne Plaza Festival City Dubai',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    Heartimage: require('../../../Assets/Images/heartBlack.png'),
    HeartimageRed: require('../../../Assets/Images/heartRed.png'),
    Heading:'PropNext Awards, Conference & Expo',
    dateEvent:'10:22 AM 22-November-2024',
    Money:'$500',
    screen:'EventPayment'
  },
  
  ]

const EventMap = () => {
    const navigation = useNavigation();

    const renderItem=({item,index})=>{
        return(
          <TouchableOpacity style={styles.Box} activeOpacity={0.5}
          onPress={() => navigation.navigate(item.screen,{data:item})}>
            <Image source={item.Icon} style={styles.BigIcon}/>
            <Text style={styles.Coference}>{item.Heading}</Text>
            <View style={styles.location}>
             <Image source={item.Locationimage} style={styles.LocImage}/>
             <Text style={[styles.LocText,{left:20}]}>{item.Location}</Text>
            </View>
            <View style={styles.DateMoney}>
              <Text style={styles.LocText}>{item.dateEvent}</Text>
              <Text  style={[styles.LocText,{color:'blue',fontSize:15,fontWeight:'600'}]}>{item.Money}</Text>
            </View>
          </TouchableOpacity>
        )
      }
  
    return (
      <>
        {/* <ImageBackground
          source={require('../../../Assets/Images/MapImage.png')}
          style={{height: '100%', width: '100%',}}
          resizeMode='cover'>
            <View style={{padding:15}}>
                <CustomHeader back={true} title={'Event'} left={true}
                OnPress={()=>navigation.goBack()}/>
            </View>
         <View style={{position:'absolute',bottom:20,}}>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{gap:15,marginLeft:20}}
            showsHorizontalScrollIndicator={false}
          />
         </View>
        </ImageBackground> */}
          <View style={styles.containerMap}>
     
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
       <Image source={require('../../../Assets/Images/left-arrow.png')} style={styles.backImage}/>
     </TouchableOpacity>
     <View style={{position:'absolute',bottom:20,zIndex:1,}}>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{gap:15,marginLeft:10,marginRight:20}}
            showsHorizontalScrollIndicator={false}
          />
         </View>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude:  25.229958059472196, 
         longitude: 55.35825059733256,
         latitudeDelta: 0.015,
         longitudeDelta: 0.112,
       }}
     >
       <Marker
         coordinate={{ latitude: 25.229958059472196, longitude: 55.35825059733256 }}
         title={'AgriNext Awards and Conference'}
         description={'Crowne Plaza | Dubai - United Arab Emirates'}
       />
     </MapView>
   </View>
      </>
    );
  };
  

export default EventMap

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:15
        
    },
    Box:{
    //  backgroundColor:'red',
    // position:'absolute',
    // top:0,
     //width:'70%',
     width:300,
     borderWidth:0.5,
    //  
    borderRadius:10,
marginTop:15,
backgroundColor:COLORS.faint,
    },
    BigIcon:{
      height:150,
      width:'100%',
      resizeMode:'stretch',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    location:{
      flexDirection:"row",
       alignItems:'center',
       marginTop:5
    },
    LocImage:{
      height:20,
      width:20,
      left:10
    },
    LocText:{
      color:COLORS.black,
      fontFamily:Font.regular,
     fontSize:14,
    //  left:10
    },
    Coference:{
      position:'absolute',
    bottom:60,
    color:COLORS.white,
    fontWeight:'800',
    fontSize:16,
    paddingLeft:10,
    fontFamily:Font.regular
    },
    DateMoney:{
      flexDirection:"row",
       alignItems:'center',
       marginTop:5,
       justifyContent:'space-between',
       paddingHorizontal:10,
       paddingBottom:5
    },
  
      containerMap: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      text: {
        position: 'absolute',
        top: 20, // adjust as per your need
        left: 20, // adjust as per your need
        zIndex: 1, // ensures it's on top of the map
      },
      backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
       
      },
      backImage:{
        height:30,
        width:30
      }
    });
  