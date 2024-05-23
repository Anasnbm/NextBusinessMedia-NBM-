import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const MapContainer = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../../Assets/Images/left-arrow.png')} style={styles.backImage}/>
      </TouchableOpacity>
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
  )
}

export default MapContainer

const styles = StyleSheet.create({
  container: {
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
    top: 20,
    left: 20,
    zIndex: 1,
   
  },
  backImage:{
    height:30,
    width:30
  }
});
