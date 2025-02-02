import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../Theme/Colors';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import * as Animatable from 'react-native-animatable';
const SpleshScreen1 = () => {
  const navigation = useNavigation()

  useEffect(()=>{
      const Timer=setTimeout(()=>{
          navigation.navigate('Signup')
      },2000)
      return ()=>clearTimeout(Timer)
  },[])
  return (
    <View style={styles.container}>
      <Animatable.Image animation={'slideInUp'} source={require('../../Assets/Images/NBMLogo.png')} style={styles.Image} />
    </View>
  )
}

export default SpleshScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image: {
    height: Height * 0.18, width: Width,
    resizeMode:'contain'
  }
})