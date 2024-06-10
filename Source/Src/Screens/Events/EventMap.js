import { FlatList, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const EventMap = () => {
  const navigation = useNavigation();
  return (
    <>

      <View style={styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 25.229958059472196,
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





  containerMap: {
    height: 400,
    borderWidth: 1,
    marginBottom: 40,
   borderRadius:5
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },


});
